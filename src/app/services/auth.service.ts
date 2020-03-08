import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = "https://reqres.in/api/login";
  signupUrl: string = "https://reqres.in/api/register";

  private LoggedInStatus = JSON.parse(sessionStorage.getItem('loggedIn') || 'false');

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // Set User Data
  authenticate(email: string, password: string) {
    
    let params = {
      'email': email,
      'password': password
    }

    return this.http.post<any>(this.loginUrl, params).subscribe(data => {
      sessionStorage.setItem('useremail', email);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('loggedIn', 'true');
      console.log("Post Login Data", data);
    },
    error => {
      console.log("POST Login Error", error);
    });
  
  }

  isUserLoggedIn() {
    // return this.LoggedInStatus;
    return JSON.parse(sessionStorage.getItem('loggedIn') || this.LoggedInStatus);
  }

  logOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  signup(params) {
  
      return this.http.post<any>( this.signupUrl, params ).subscribe(data => {
          sessionStorage.setItem('token', data.token);
          console.log("Data", data);
        },
        error => {
          console.log("Error", error);
        }
      );
    
  }

}
