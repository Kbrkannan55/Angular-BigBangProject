import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.component.html',
  styleUrls: ['./appointmentdetails.component.css']
})
export class AppointmentdetailsComponent {
  constructor(private api:ServicesService,
    private formBuilder: FormBuilder,
    private signup:SignupService
    ){}
  ngOnInit(): void {
    this.getAllDoctors()
  }
  AddForm!:FormGroup
  DDoctors:any

  


  private getAllDoctors(): void {
    this.api.getAllAppointmentDetails().subscribe(result => {
      this.DDoctors = result
    });
  }


  public Add(doctor:any): void {
    this.signup.signup(doctor).subscribe({
      next: (res) => {
        console.log(res);
        this.del(doctor)
      }
    })
  }

  public del(doctor:any):void{
    console.log(doctor)

    this.api.deleteDoctorDetails(doctor.id).subscribe((res) => {
      alert('Deleted');
    });
  }
  role: string = localStorage.getItem('role') || '';
  isLoggedIn!:boolean;

  logout():void{
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  sessionStorage.removeItem('docName');
  sessionStorage.removeItem('Name');
  
  }

}
