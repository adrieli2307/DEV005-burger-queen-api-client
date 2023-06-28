import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import {LoginI} from '../interfaces/login.interface';
import {ResponseI} from '../interfaces/response.interface';
import { Observable } from 'rxjs';

=======
import { InfoLoginI } from '../interfaces/InfoLogin';
import { LoginResponseI } from '../interfaces/InfoLoginResponse';
import { Observable } from 'rxjs';
>>>>>>> origin/caro

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  url: string = 'http://localhost:8080/';
  
  constructor(private http : HttpClient ) { }

    loginByEmail(form:LoginI): Observable<ResponseI> {
      let direccion = this.url + 'auth';
      return this.http.post<ResponseI>(direccion, form);
      
    }
=======
  constructor(private http: HttpClient) { }

  loginByEmail(body: InfoLoginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('http://localhost:8080/login', body)
  }
>>>>>>> origin/caro
}
