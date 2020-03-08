import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  pageTitle: string;

  LoginForm: FormGroup;
  submitted = false;
  loginSuccess = false;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { 
    this.pageTitle = "Login";
  }

  ngOnInit(): void {

    // Add Class in body
    document.getElementsByTagName('body')['0'].classList.add('login-page');

    // Form Group
    this.LoginForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit(event) {
    event.preventDefault();

    this.submitted = true;

    if(this.LoginForm.invalid) {
      this.toastr.error('Invalid Login', 'Error', {
        timeOut: 1000
      }); 
      return;
    }
    
    let email = this.LoginForm.controls.email.value;
    let password = this.LoginForm.controls.password.value;
    
    if(this.authService.authenticate(email, password)) {
      this.loginSuccess = true;
      this.toastr.success('Login successful', 'Success', {
        timeOut: 1000
      }); 
      this.router.navigate(['/dashboard']);
    } 
    
  }

  onKeyUp() {

    if(this.LoginForm.invalid)
      return;

    let email = this.LoginForm.controls.email.value;
    let password = this.LoginForm.controls.password.value;
    if(email && password) {
      this.submitted = false;
      this.loginSuccess = false;
    }

  }


  ngOnDestroy(): void {

      // Remove Class in body
      document.getElementsByTagName('body')['0'].classList.remove('contact-page');

  }

}