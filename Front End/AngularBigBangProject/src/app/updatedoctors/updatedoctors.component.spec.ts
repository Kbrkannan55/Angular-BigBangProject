import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedoctorsComponent } from './updatedoctors.component';

describe('UpdatedoctorsComponent', () => {
  let component: UpdatedoctorsComponent;
  let fixture: ComponentFixture<UpdatedoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatedoctorsComponent]
    });
    fixture = TestBed.createComponent(UpdatedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
