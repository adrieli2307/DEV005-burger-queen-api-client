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
  constructor(private http: HttpClient, userDataFromApi: AuthService) {
    this.tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;
  }
  getOrders(): Observable<OrderI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`);
    return this.http.get<OrderI[]>('http://localhost:8080/orders', {headers}).pipe(
      tap((data: OrderI[]) => {
        console.log('dataOrders', data);
        // Conversión de data a objeto string
      })
    );
  }
}
