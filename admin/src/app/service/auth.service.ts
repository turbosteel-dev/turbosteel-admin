import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  
  baseUrl = 'https://turbo-steel-api-nkapt.ondigitalocean.app';
  constructor(private http: HttpClient) {}

  isLoggedIn() {
    return !!localStorage.getItem("userId") || !!localStorage.getItem("token");
  }

  forgotPassword(email: { email: string }) {
    return this.http.post(`${this.baseUrl}/forgot-password`, email);
  }

  resetPassword(token: string, password: string){
    return this.http.post(`${this.baseUrl}/reset-password`, { token, password });
  }
}
