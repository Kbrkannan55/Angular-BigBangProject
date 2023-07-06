import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  public getAllDummyDoctors(): Observable<any> {
    return this.http.get('https://localhost:7266/api/DummyDoctorDetails')
  }

  public postDoctorDetails(DoctorDetail: any): Observable<any> {
    return this.http.post('https://localhost:7266/api/DoctorDetail', DoctorDetail)
  }

  public deleteDummyDoctors(id: string): Observable<any> {
    return this.http.delete('https://localhost:7266/api/DummyDoctorDetails?id=' + id
    );
  }

  public postAppointmentDetails(appointment: any): Observable<any> {
    return this.http.post('https://localhost:7266/api/Appointment', appointment)
  }

  public getAllAppointmentDetails(): Observable<any> {
    return this.http.get('https://localhost:7266/api/Appointment')
  }

  public deleteDoctorDetails(id: number): Observable<any> {
    return this.http.delete('https://localhost:7266/api/DoctorDetail?id=' + id)
  }


  public getAllDoctorDetails(): Observable<any> {
    return this.http.get('https://localhost:7266/api/DoctorDetail')
  }


  public getAppointmentByDate(dates: string): Observable<any> {
    return this.http.get(`https://localhost:7266/api/Appointment/GetByDate?dates=` + dates)
  }
  public updateDoctorDetails(id: number,doctor:any): Observable<any> {
    return this.http.put(`https://localhost:7266/api/DoctorDetail?id=` + id,doctor)
  }

}
