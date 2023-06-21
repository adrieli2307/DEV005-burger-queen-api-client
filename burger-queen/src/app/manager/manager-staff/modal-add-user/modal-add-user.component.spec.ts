import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddUserComponent } from './modal-add-user.component';

describe('ModalAddUserComponent', () => {
  let component: ModalAddUserComponent;
  let fixture: ComponentFixture<ModalAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddUserComponent]
    });
    fixture = TestBed.createComponent(ModalAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
