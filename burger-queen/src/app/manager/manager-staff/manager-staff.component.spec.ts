import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStaffComponent } from './manager-staff.component';

describe('ManagerStaffComponent', () => {
  let component: ManagerStaffComponent;
  let fixture: ComponentFixture<ManagerStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerStaffComponent]
    });
    fixture = TestBed.createComponent(ManagerStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
