import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginI} from '../interfaces/login.interface';
import {ResponseI} from '../interfaces/response.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/';
  
  constructor(private http : HttpClient ) { }

    loginByEmail(form:LoginI): Observable<ResponseI> {
      let direccion = this.url + 'auth';
      return this.http.post<ResponseI>(direccion, form);
      
    }
}
