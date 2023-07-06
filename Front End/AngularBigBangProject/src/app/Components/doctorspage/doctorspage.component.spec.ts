import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorspageComponent } from './doctorspage.component';

describe('DoctorspageComponent', () => {
  let component: DoctorspageComponent;
  let fixture: ComponentFixture<DoctorspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorspageComponent]
    });
    fixture = TestBed.createComponent(DoctorspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
