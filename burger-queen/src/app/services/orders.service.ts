import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { OrderI } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  tokenAccess: string | undefined;
   private  apiurl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient, userDataFromApi: AuthService) {
    this.tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;
  }


  // Lista ordenes 

  getOrders(): Observable<OrderI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`);
    return this.http.get<OrderI[]>(this.apiurl, {headers}).pipe(
      tap((data: OrderI[]) => {
        console.log('dataOrders', data);
        // Conversión de data a objeto string
      })
    );
  }

  // Crear una orden 

  postOrder(order: OrderI): Observable<any> {
    return this.http.post(this.apiurl, order);
  }

  // Modificar una orden 
  patchOrder(id: string, status: string): Observable<OrderI> {
    return this.http.patch<OrderI>(
      `${this.apiurl}/${id}`,
      { status: status },
    );
  }

}
