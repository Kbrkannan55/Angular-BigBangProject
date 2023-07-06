import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/Models/status';
import { SignupService } from 'src/app/Services/signup.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  frm!: FormGroup;
  status!: Status;

  get f() {
    return this.frm.controls;  // needed for validation in html file 
  }


  constructor(private signupService: SignupService, private fb: FormBuilder,
    private authService: AuthService, private router: Router
  ) { }

  onPost() {
    this.status = { statusCode: 0, message: "wait...." };

    this.signupService.login(this.frm.value).subscribe({
      next: (res) => {
        console.log(res);
        // save username, accesstoken and refresh token into localStorage
        this.authService.addAccessToken(res.token);
        this.authService.addRefreshToken(res.refreshToken);
        this.authService.addUsername(res.username);
        
        this.status.statusCode = res.statusCode;
        this.status.message = res.message;
        this.roles = res.roles
        localStorage.setItem('role',this.roles)
        if (this.roles == "Admin") {
          console.log(this.roles)
          this.router.navigate(['/adminpage']);
        }

        else if (this.roles == "Patient") {
          this.router.navigate(['/appointment']);
        }
        else if (this.roles == "Doctor") {
          this.router.navigate(['/doctorpage'])
        }

        if (res.statusCode == 1) {
        }

      },
      error: (err) => {
        console.log(err);
        this.status.statusCode = 0;
        this.status.message = "some error on server side";
      }
    })
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })

    if (this.authService.isLoggedIn()) {

    }

  }

  log(): void {

  }


  roles: any
  isLoggedIn!: boolean;





  checkLoggedInUser() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.roles = this.authService.getUserRole();
  }


}
