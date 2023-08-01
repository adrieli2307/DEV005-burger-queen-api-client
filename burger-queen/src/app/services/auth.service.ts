import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { UserResponseI } from '../interfaces/UserResponse';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  // Método para enviar data (email, password) y guardar respuesta en localStorage 
  responseUserFromApi(body: InfoLoginI): Observable<UserResponseI> {
    return this.http.post<UserResponseI>('http://localhost:8080/login', body).pipe(
      tap((data: UserResponseI) => {
        // Conversión de data a objeto string
        const dataToLocalS: string = JSON.stringify(data)
        console.log('datas', dataToLocalS)
        // Almacenamiento de dataToLocalS a localStorage
        localStorage.setItem('dataUser', dataToLocalS)
      }))
  }

  // Método para obtener data de localStorage
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

  // Método para cerrar cesión
  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('LoginUserI')
    this.router.navigate(['/login/'])
  }
}