import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { UserResponseI, UserResponseErrorI,  } from '../interfaces/UserResponse';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

     responseUserFromApi(body: InfoLoginI) : Observable<UserResponseI> {
     return this.http.post<UserResponseI>('http://localhost:8080/login', body).pipe(
      tap ((data: UserResponseI) => {
        // Conversión de data a objeto string
        const dataToLocalS: string = JSON.stringify(data)
        console.log('datas', dataToLocalS)
        // Almacenamiento de dataToLocalS a localStorage
        localStorage.setItem('dataUser', dataToLocalS)
    }))}

    getCurrentUser(): UserResponseI | null {
      const dataLocalS = localStorage.getItem('dataUser');
      console.log('dataLocalS', dataLocalS);
      if (dataLocalS === null) {
        return null
      }
      const dataUserObj = JSON.parse(dataLocalS);
      console.log('obj', dataUserObj);
      return dataUserObj;
    }
  }