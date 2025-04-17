import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm!: FormGroup;
  forgotUrl = '/api/admin/forgot-password'
  spinner = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private snackBar: MatSnackBar
  ) {}


  ngOnInit(){
    this.buildForm()
  }


  buildForm(){
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }


  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.spinner = true;
      this.forgotPasswordForm.markAllAsTouched();
      this.http.post(this.forgotUrl,this.forgotPasswordForm.value).subscribe({
        next: () => {
          this.snackBar.open('Password reset link sent!', '', { duration: 3000 });
          this.forgotPasswordForm.reset();
          this.spinner = false
        },
        error: () => {
          this.snackBar.open('Failed to send password reset link. Try again later.', '', { duration: 3000 });
          this.spinner = false;
        }
      });
    }
  }

}