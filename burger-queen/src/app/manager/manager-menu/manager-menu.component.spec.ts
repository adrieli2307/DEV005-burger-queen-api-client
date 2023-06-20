import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMenuComponent } from './manager-menu.component';

describe('ManagerMenuComponent', () => {
  let component: ManagerMenuComponent;
  let fixture: ComponentFixture<ManagerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerMenuComponent]
    });
    fixture = TestBed.createComponent(ManagerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
