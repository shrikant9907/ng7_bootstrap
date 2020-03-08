import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: "Home"
    }
    
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'about-us',
    component: AboutComponent,
    data: {
      title: "About Us"
    }
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    data: {
      title: "Contact Us"
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: "Login"
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: "Sign Up"
    }
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    data: {
      title: "Page Not Found"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
