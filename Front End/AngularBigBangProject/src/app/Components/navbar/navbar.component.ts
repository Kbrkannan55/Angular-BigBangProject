import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'BigBankProject';
  roles="";
  isLoggedIn!:boolean;

  constructor(private authService:AuthService){
  }

  checkLoggedInUser(){
    this.isLoggedIn= this.authService.isLoggedIn();
    this.roles=this.authService.getUserRole();
  }
  logout(){
    this.authService.logout();
  }

}
