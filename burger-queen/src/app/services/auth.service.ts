import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { InfoResponseI } from '../interfaces/InfoResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginByEmail(body: InfoLoginI): Observable<InfoResponseI> {
    return this.http.post<InfoResponseI>('http://localhost:8080/login', body)
  }
}
