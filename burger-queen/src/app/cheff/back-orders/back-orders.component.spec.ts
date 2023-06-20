import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOrdersComponent } from './back-orders.component';

describe('BackOrdersComponent', () => {
  let component: BackOrdersComponent;
  let fixture: ComponentFixture<BackOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackOrdersComponent]
    });
    fixture = TestBed.createComponent(BackOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
