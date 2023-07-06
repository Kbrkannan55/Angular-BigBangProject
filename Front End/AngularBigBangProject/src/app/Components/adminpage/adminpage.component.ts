import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  constructor(private api: ServicesService,
    private formBuilder: FormBuilder,
    private signup: SignupService
  ) { }
  ngOnInit(): void {
    this.getAllDoctors()
  }
  AddForm!: FormGroup
  DDoctors: any

  private getAllDoctors(): void {
    this.api.getAllDummyDoctors().subscribe(result => {
      this.DDoctors = result
    });
  }


  public Add(doctor: any): void {
    this.signup.signup(doctor).subscribe({
      next: (res) => {
        console.log(res);
        this.del(doctor)
      }
    })
  }

  public del(doctor: any): void {
    console.log(doctor)
    this.api.deleteDummyDoctors(doctor.username).subscribe((res) => {
      alert('Deleted');
    });
    window.location.reload()
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
