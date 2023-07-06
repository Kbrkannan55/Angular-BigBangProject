import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  patientForm!: FormGroup;
  DDoctors!: any
  prdtlist!: any

  constructor(private formBuilder: FormBuilder,
    private api: ServicesService,
    private router: Router) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      sex: ['', Validators.required],
      date: ['', Validators.required],
      doctorId: ['']
    });

    this.prdtlist = this.formBuilder.group({
      name: [],
      sex: [],
      specialization: [],
      experience: [],
      phoneNumber: []

    })


    this.getDoctors();
  }

  onSubmit() {

  }

  public getDoctors(): void {
    this.api.getAllDoctorDetails().subscribe((result) => {
      this.DDoctors = result
    })
  }


  public Add(): void {
    console.log(this.patientForm)

    this.api.postAppointmentDetails(this.patientForm.value).subscribe((result) => {
      alert("Pay for Registration")
      this.router.navigate(['payment'])
    });
  }

}

