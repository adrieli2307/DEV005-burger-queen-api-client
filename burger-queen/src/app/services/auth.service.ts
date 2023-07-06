import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { LoginResponseI, LoginUsersI } from '../interfaces/InfoLoginResponse';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: LoginUsersI | null;
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { 
    this.currentUser = null;
  } 

  loginByEmail(body: InfoLoginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('http://localhost:8080/login', body)
  }

  setCurrentUser(user: LoginUsersI):void {
    this.currentUser = user;
  }
  getCurrentUser():LoginUsersI | null {
    return this.currentUser;
  }

  logout(): void {
   localStorage.removeItem('token')
   localStorage.removeItem('LoginUserI')
   this.router.navigate(['/login'])
  }

}
