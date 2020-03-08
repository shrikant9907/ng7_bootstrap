import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BannerComponent } from './common/banner/banner.component'; 

import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyBq4fP5qPaX2u_i0UneRVPK5kyNtg4Xj6E",
  authDomain: "ng7app-c41e4.firebaseapp.com",
  databaseURL: "https://ng7app-c41e4.firebaseio.com",
  projectId: "ng7app-c41e4",
  storageBucket: "ng7app-c41e4.appspot.com",
  messagingSenderId: "836695529751",
  appId: "1:836695529751:web:53cb1cea54a5cc4ca57f52",
  measurementId: "G-YT7Y06KSTL"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent, 
    PagenotfoundComponent, LoginComponent, SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    BlogModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }), 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
