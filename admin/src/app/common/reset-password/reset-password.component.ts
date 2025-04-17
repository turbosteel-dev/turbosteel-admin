import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordForm!: FormGroup;
  token!: string;
  resetUrl = '/api/admin/reset-password'
  spinner = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams['token'];
    this.buildForm();
  }


  buildForm(){
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }


  onSubmit(): void {
    if (this.resetPasswordForm.valid && this.passwordsMatch()) {
      this.spinner = true;
      const newPassword = this.resetPasswordForm.value.password;
      let postData = {
        token: this.token,
        newPassword: newPassword
      }
      this.http.post(this.resetUrl, postData).subscribe({
        next: () => {
          this.snackBar.open('Password reset successfully!', '', { duration: 3000 });
          this.spinner = false;
          this.router.navigate(['./login']);

        },
        error: () => {
          this.snackBar.open('Failed to reset password. Try again later.', '', { duration: 3000 });
          this.spinner = false;
        }
      });
    }
  }

  passwordsMatch(): boolean {
    return this.resetPasswordForm.value.password === this.resetPasswordForm.value.confirmPassword;
  }
}

