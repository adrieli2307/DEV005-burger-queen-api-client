import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { LoginResponseI, LoginUsersI } from '../interfaces/InfoLoginResponse';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { 
    this.currentUser = null;
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('LoginUserI')
    this.router.navigate(['/login'])
  }

  loginByEmail(body: InfoLoginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('http://localhost:8080/login', body).pipe(tap ((data: LoginResponseI) => {
      console.log('data', data)
      // Conversión de data a objeto string
      const dataToLocalS: string = JSON.stringify(data)
      console.log('datas', dataToLocalS)
      // Almacenamiento de dataToLocalS a localStorage
      localStorage.setItem('dataUser', dataToLocalS)
  }))}

  setCurrentUser(user: LoginUsersI):void {
    this.currentUser = user;
  }
