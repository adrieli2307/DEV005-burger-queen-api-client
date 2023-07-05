import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { UserResponseI, UserResponseErrorI } from '../interfaces/UserResponse';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Creación de propiedad para guardar data de usuario autentificado
 // private currentUser: UserResponseI | null;
  // Variable para guardar error
 // private errorCurrentUser: UserResponseErrorI | null;

  constructor(private http: HttpClient) {

  //  this.currentUser = null;
   // this.errorCurrentUser = null;
  }





























  
  loginByEmail(body: InfoLoginI) : Observable<UserResponseI> {
   return this.http.post<UserResponseI>('http://localhost:8080/login', body).pipe(
    tap ((data: UserResponseI) => {
      console.log('data', data)
      // Conversión de data a objeto string
      const dataToLocalS: string = JSON.stringify(data)
      console.log('datas', dataToLocalS)
      // Almacenamiento de dataToLocalS a localStorage
      localStorage.setItem('dataUser', dataToLocalS)
    // },
    //   ((error: UserResponseErrorI) => {
    //     this.errorCurrentUser = error;
    //     console.log('probando error', error)
    //   }))
    // return this.http.post<LoginResponseI>('http://localhost:8080/login', body)
    //.subscribe
    //  local storage . set item  DATA 
  }))}

  getCurrentUser(): UserResponseI | null {
    const dataLocalS = localStorage.getItem('dataUser');
    console.log('dataLocalS', dataLocalS);
    if (dataLocalS === null) {
      return null
    }
    const dataUserObj = JSON.parse(dataLocalS);
    //console.log('dataLocalSerror', JSON.parse(dataLocalS));
    return dataUserObj;
    //  const dataUser = JSON.parse(dataLocalS);
  }
  // Método para obtener error

  // getErrorUser(): UserResponseErrorI | null {
  //   // const dataLocalS = localStorage.getItem('dataUser');
  //   if (this.errorCurrentUser === null) {
  //     return null
  //   }
  //   return this.errorCurrentUser;
  //   //  const dataUser = JSON.parse(dataLocalS);
  // }

/*---------------codigo anterior------------------*/
  /*setCurrentUser(user: LoginUsersI):void {
     this.currentUser = user;
   }
 
   getCurrentUser():LoginUsersI | null {
     //localStorage get item DATA
     return this.currentUser;
   }*/
/*---------------codigo anterior------------------*/
}
