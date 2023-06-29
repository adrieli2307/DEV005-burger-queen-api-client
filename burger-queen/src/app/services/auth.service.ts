import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { LoginResponseI } from '../interfaces/InfoLoginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginByEmail(body: InfoLoginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('http://localhost:8080/login', body)
  }
}
