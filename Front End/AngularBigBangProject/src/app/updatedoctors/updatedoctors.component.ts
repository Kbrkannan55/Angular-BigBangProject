import { Component } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-updatedoctors',
  templateUrl: './updatedoctors.component.html',
  styleUrls: ['./updatedoctors.component.css']
})
export class UpdatedoctorsComponent {

  constructor(private api: ServicesService) { }

  ProductID: any

  DoctorsList: any = {
    name: "",
    sex: "",
    specialization: "",
    experience: "",
    phoneNumber: ""
  };
  public UpdateById() {
    console.log(this.DoctorsList);
    return this.api.updateDoctorDetails(this.ProductID, this.DoctorsList)
      .subscribe((result) => {
        alert(' Data Updated ');
        window.location.reload()
      });
  }


  role: string = localStorage.getItem('role') || '';
  isLoggedIn!: boolean;

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    sessionStorage.removeItem('docName');
    sessionStorage.removeItem('Name');
    localStorage.removeItem("accessToken")
  }
}
