import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { ChangePasswrd } from '../Models/change-password';
import { LoginResponseModel } from '../Models/login-response';
import { LoginRequestModel } from '../Models/loginRequestModel';
import { SignupRequestModel } from '../Models/signupReqModel';
import { Status } from '../Models/status';
import { DummyRequestModel } from '../Models/dummy-doctor';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  //private baseUrl = environment.baseUrl+'Authorization';
  constructor(private http:HttpClient) { 

  }

  login(model:LoginRequestModel){
  return this.http.post<LoginResponseModel>(`https://localhost:7266/api/Authorization/Login`,model);
  }

  signup(model:SignupRequestModel){
     return this.http.post<Status>(`https://localhost:7266/api/Authorization/Registration`,model);
  }

  dummy(model:DummyRequestModel){
    return this.http.post(`https://localhost:7266/api/DummyDoctorDetails`,model)
  }

  chagePassword(model:ChangePasswrd){
    return this.http.post<Status>(`https://localhost:7266/api/Authorization/ChangePassword`,model);
    }

}