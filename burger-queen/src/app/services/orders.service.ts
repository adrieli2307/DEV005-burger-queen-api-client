import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { OrderI } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiurl = 'http://localhost:8080/orders';
  private httpOptions: { headers: HttpHeaders };

  constructor(private http: HttpClient, userDataFromApi: AuthService) {
    const tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;
    this.httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${tokenAccess}`)
    };

  }


  // Obtener todas las órdenes
  getOrders(): Observable<OrderI[]> {
    return this.http.get<OrderI[]>(this.apiurl, this.httpOptions);
  }


  // Obtener órdenes por estado
  getOrdersByStatus(status: string): Observable<OrderI[]> {
    const url = `${this.apiurl}?status=${status}`;
    return this.http.get<OrderI[]>(url, this.httpOptions);
  }


  // Crear una orden
  postOrder(order: OrderI): Observable<any> {
    return this.http.post(this.apiurl, order, this.httpOptions)
  }

  // Modificar una orden
  patchOrder(id: number, status: string, dateProcessed: Date): Observable<OrderI> {
    const url = `${this.apiurl}/${id}`;
    const body = { status: status, dateProcessed: dateProcessed };
    return this.http.patch<OrderI>(url, body, this.httpOptions);
  }

  // Calcular tiempo de realización de pedido
  calculateDuration(dataEntry: Date, dateProcessed: Date) {

    const timeEntry = new Date(dataEntry).getTime();
    const timeProcessed = new Date(dateProcessed).getTime();
    const duration = timeProcessed - timeEntry;
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }
 

}