import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminpageComponent } from './Components/adminpage/adminpage.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { AuthGuard } from './Services/auth.guard';
import { AvailabledoctorsComponent } from './Components/availabledoctors/availabledoctors.component';
import { AppointmentdetailsComponent } from './Components/appointmentdetails/appointmentdetails.component';
import { DoctorspageComponent } from './Components/doctorspage/doctorspage.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AdddoctorsComponent } from './Components/adddoctors/adddoctors.component';
import { UpdatedoctorsComponent } from './updatedoctors/updatedoctors.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'adminpage', component: AdminpageComponent },
  { path: 'login/signup', component: SignupComponent },
  { path: 'login/appointment', component: AppointmentComponent },
  { path: 'signup/login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'appointment/payment', component: PaymentComponent },
  { path: 'approval', component: AdminpageComponent, canActivate: [AuthGuard] },
  { path: 'adddoctor', component: AdddoctorsComponent },
  { path: 'availabledoctors', component: AvailabledoctorsComponent },
  { path: 'appointmentdetails', component: AppointmentdetailsComponent },
  { path: 'login/adminpage', component: AdminpageComponent, canActivate: [AuthGuard] },
  { path: 'login/approval', component: AdminpageComponent, canActivate: [AuthGuard] },
  { path: 'adminpage/availabledoctors', component: AvailabledoctorsComponent, canActivate: [AuthGuard] },
  { path: 'adminpage/appointmentdetails', component: AppointmentdetailsComponent, canActivate: [AuthGuard] },
  { path: 'adminpage/adddoctor', component: AdddoctorsComponent, canActivate: [AuthGuard] },
  { path: 'doctorpage', component: DoctorspageComponent },
  {path:'updatedoctors',component:UpdatedoctorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
