import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsComponent } from './buttons.component';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit increment event when increment button is clicked', () => {
    const emitSpy = jest.spyOn(component.clickButtonEvent, 'emit');

    // Simulate click on increment button
    component.incrementQuantity();

    // Assert
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should emit decrement event when decrement button is clicked', () => {
    const emitSpy = jest.spyOn(component.clickButtonEvent, 'emit');

    // Simulate click on decrement button
    component.decrementQuantity();

    // Assert
    expect(emitSpy).toHaveBeenCalledWith(-1);
  });
});