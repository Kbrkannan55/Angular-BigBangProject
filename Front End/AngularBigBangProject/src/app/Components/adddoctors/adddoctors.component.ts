import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/Services/services.service';

@Component({
  selector: 'app-adddoctors',
  templateUrl: './adddoctors.component.html',
  styleUrls: ['./adddoctors.component.css']
})
export class AdddoctorsComponent implements OnInit {
  public AddForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ServicesService) { }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.AddForm = this.formBuilder.group({
      name: [],
      sex: [],
      specialization: [],
      experience: [],
      phoneNumber: [],
    });
  }
  public Add(): void {
    console.log(this.AddForm)
    this.api.postDoctorDetails(this.AddForm.value).subscribe((result) => {
      alert('Added Successfully');
      window.location.reload()
    });
  }

}
