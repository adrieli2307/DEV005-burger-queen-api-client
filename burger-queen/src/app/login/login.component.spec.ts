import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResponseI, UserResponseErrorI } from '../interfaces/UserResponse';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockUserResponse: UserResponseI;
  let mockUserFromApi: any; // Cambia el tipo de dato del mockUserFromApi

  beforeEach(async () => {
    mockUserResponse = {
      user: {
        role: 'waiter',
        email: '',
        id: 0
      },
      accessToken: 'test-access-token'
    };

    mockUserFromApi = {
      responseUserFromApi: jest.fn().mockReturnValue(of(mockUserResponse))
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useValue: mockUserFromApi }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it('should navigate to waiter/orders for waiter role', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = jest.spyOn(router, 'navigate');
    const loginFormValue = { email: 'test-user', password: 'test-password' };
    component.loginForm.setValue(loginFormValue);

    component.sendForm();

    expect(mockUserFromApi.responseUserFromApi).toHaveBeenCalledWith(loginFormValue);
    expect(navigateSpy).toHaveBeenCalledWith(['../waiter/orders']);
  });

  it('should navigate to manager for admin role', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = jest.spyOn(router, 'navigate');
    const loginFormValue = { email: 'test-user', password: 'test-password' };
    component.loginForm.setValue(loginFormValue);
    mockUserResponse.user.role = 'admin';

    component.sendForm();

    expect(mockUserFromApi.responseUserFromApi).toHaveBeenCalledWith(loginFormValue);
    expect(navigateSpy).toHaveBeenCalledWith(['../manager']);
  });

  it('should navigate to kitchen/back-orders for chef role', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = jest.spyOn(router, 'navigate');
    const loginFormValue = { email: 'test-user', password: 'test-password' };
    component.loginForm.setValue(loginFormValue);
    mockUserResponse.user.role = 'cheff';

    component.sendForm();

    expect(mockUserFromApi.responseUserFromApi).toHaveBeenCalledWith(loginFormValue);
    expect(navigateSpy).toHaveBeenCalledWith(['../kitchen/back-orders']);
  });

  it('should handle error response from API', () => {
    const loginFormValue = { email: 'test-user', password: 'test-password' };
    component.loginForm.setValue(loginFormValue);
    const mockError: UserResponseErrorI = {
      error: 'Error message',
      ok: false
    };
    jest.spyOn(mockUserFromApi, 'responseUserFromApi').mockReturnValue(throwError(mockError));
    console.error = jest.fn();

    component.sendForm();

    expect(mockUserFromApi.responseUserFromApi).toHaveBeenCalledWith(loginFormValue);
    expect(console.error).toHaveBeenCalledWith(mockError);
    expect(component.errorApi).toEqual(mockError.error);
  });
});
