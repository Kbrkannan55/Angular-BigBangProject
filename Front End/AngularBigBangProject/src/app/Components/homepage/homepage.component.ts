import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private api:ServicesService,
    private formBuilder: FormBuilder,
    private signup:SignupService
    ){}
  ngOnInit(): void {
    this.getAllDoctors()
     let mybutton = document.getElementById("myBtn");
                
              
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton!.style.display = "block";
      } else {
        mybutton!.style.display = "none";
      }
    }
    
   
   

  }
   topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  
  }
  AddForm!:FormGroup
  DDoctors!:any

  


  private getAllDoctors(): void {
    this.api.getAllDoctorDetails().subscribe(result => {
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
  
  

}
