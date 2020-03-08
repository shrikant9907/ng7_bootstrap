import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  pageTitle: string;

  SignupForm: FormGroup;
  submitted = false;
  signupSuccess = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) { 
    this.pageTitle = "Sign Up";
  }

  ngOnInit(): void {

    // Add Class in body
    document.getElementsByTagName('body')['0'].classList.add('signup-page');

    // Form Group
    this.SignupForm = this.formBuilder.group({
      name: ['shrikant', [Validators.required]],
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['pistol', [Validators.required, Validators.minLength(6)]],
      cpassword: ['pistol', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit(event) {
    event.preventDefault();

    this.submitted = true;

    if(this.SignupForm.invalid) {
      this.toastr.error('Invalid Signup', 'Error', {
        timeOut: 1000
      }); 
      return;
    }
      
    let params = {
      'name': this.SignupForm.controls.name.value,
      'email': this.SignupForm.controls.email.value,
      'password': this.SignupForm.controls.password.value,
      'cpassword': this.SignupForm.controls.cpassword.value
    }
    
    if(this.authService.signup(params)) {
      this.signupSuccess = true;
      this.toastr.success('Signup successful', 'Success', {
        timeOut: 3000
      }); 
      this.router.navigate(['/dashboard']);
    } 
    
  }

  onKeyUp() {

    if(this.SignupForm.invalid)
      return;

    let controls = this.SignupForm.controls;    
    if(controls.name.value && controls.email.value && controls.password.value && controls.cpassword.value) {
      this.submitted = false;
      this.signupSuccess = false;
    }

  }


  ngOnDestroy(): void {
      // Remove Class in body
      document.getElementsByTagName('body')['0'].classList.remove('signup-page');
  }

}