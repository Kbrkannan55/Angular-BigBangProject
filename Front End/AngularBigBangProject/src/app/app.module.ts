import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgToastModule} from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InterceptorService } from './Services/interceptor.service';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminpageComponent } from './Components/adminpage/adminpage.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { AvailabledoctorsComponent } from './Components/availabledoctors/availabledoctors.component';
import { AppointmentdetailsComponent } from './Components/appointmentdetails/appointmentdetails.component';
import { DoctorspageComponent } from './Components/doctorspage/doctorspage.component';
import { AdddoctorsComponent } from './Components/adddoctors/adddoctors.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { UpdatedoctorsComponent } from './updatedoctors/updatedoctors.component';



@NgModule({
  declarations: [
    AppComponent,SignupComponent,UserComponent,LoginComponent, AdminpageComponent, HomepageComponent, NavbarComponent, FooterComponent, SidenavComponent, AppointmentComponent, AvailabledoctorsComponent, AppointmentdetailsComponent, DoctorspageComponent, AdddoctorsComponent, PaymentComponent, UpdatedoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule,NgToastModule,SlickCarouselModule,FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
