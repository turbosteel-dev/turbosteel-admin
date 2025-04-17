import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private http: HttpService, private router: Router, private snackBar: MatSnackBar) { }
  loginForm!: FormGroup;
  loginUrl = '/api/admin/login'
  loginData: any;
  spinner = false;
  ngOnInit(): void {
    this.buildForm();
  }


  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.spinner = true;
      this.http.post(this.loginUrl, this.loginForm.value).subscribe(response => {
        this.loginData = response;
        const userRole = this.loginData.role;
        const userId = this.loginData.userId;

        let token = this.loginData.token;
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', userRole); 
        localStorage.setItem('userId', userId); 

        this.snackBar.open('Login successful!', '', { duration: 2000 });
        this.spinner = false;
        if (userRole === 'admin' || userRole === 'superAdmin') {
          this.router.navigate(['/site']);
        }
      }, error => {
        this.snackBar.open('Login failed. Please check your credentials.', '', { duration: 2000 });
        this.spinner = false;
      });
    }
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Logout method to remove the token
  logout(): void {
    localStorage.removeItem('token');
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

