import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validPattern } from '../../helpers/pattern-match.validator';
import { MustMatch } from '../../helpers/must-match.validator';
import { SignupService } from '../../Services/signup.service';
import { Status } from '../../Models/status';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { ServicesService } from 'src/app/Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private signupService: SignupService, private service: ServicesService, private router: Router, private fb: FormBuilder, private toast: NgToastService) { }

  frm!: FormGroup;
  status!: Status;
  role!: any

  get f() {
    return this.frm.controls;
  }

  public onPost(): void {

    if (this.role == 'Doctor') {

      this.toast.error({ detail: "error", summary: "Somethimg wrong!", duration: 5000 });
      // this.status.message = "Wait For the Admin Approval";
      this.status = { statusCode: 0, message: "You can Login when Admin Approves" }
      this.signupService.dummy(this.frm.value).subscribe({
        next: (res) => {
          console.log(res)
          this.toast.error({ detail: "Error", summary: "Something went wrong", duration: 5000 })
          this.frm.reset()
        }
      })
    }
    else {
      this.status = { statusCode: 0, message: "wait.." };
      this.signupService.signup(this.frm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.status = res;
          this.frm.reset();
          // this.status={statusCode:1,message:"Successfully Registered"}
          alert("Registered Successfully")
        }
      })
      this.router.navigate(['/appointment'])
    }
  }

  ngOnInit(): void {
    const patternRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
    this.frm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'username': ['', Validators.required],
      'roles': [''],
      'password': ['', [Validators.required, validPattern(patternRegex)]],
      'confirmPassword': ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }
}
