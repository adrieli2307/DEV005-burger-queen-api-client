import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneOrdersComponent } from './done-orders.component';

describe('DoneOrdersComponent', () => {
  let component: DoneOrdersComponent;
  let fixture: ComponentFixture<DoneOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoneOrdersComponent]
    });
    fixture = TestBed.createComponent(DoneOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
