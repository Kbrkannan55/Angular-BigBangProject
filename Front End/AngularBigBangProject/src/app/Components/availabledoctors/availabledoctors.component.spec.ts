import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabledoctorsComponent } from './availabledoctors.component';

describe('AvailabledoctorsComponent', () => {
  let component: AvailabledoctorsComponent;
  let fixture: ComponentFixture<AvailabledoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailabledoctorsComponent]
    });
    fixture = TestBed.createComponent(AvailabledoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
