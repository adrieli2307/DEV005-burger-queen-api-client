import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderI } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiurl = 'http://localhost:8080/orders';
  private httpOptions: { headers: HttpHeaders };
  private ordersSubject = new BehaviorSubject<OrderI[]>([]);
  constructor(private http: HttpClient, userDataFromApi: AuthService) {
    const tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;
    this.httpOptions = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${tokenAccess}`)
    };
    this.updateOrders();
  }


  // Obtener todas las órdenes
  getOrders(): Observable<OrderI[]> {
    return this.http.get<OrderI[]>(this.apiurl, this.httpOptions);
  }
  updateOrders():void {
    this.getOrders().subscribe(result=>{
      this.ordersSubject.next(result);
    })
  }

  // Obtener órdenes por estado
  getOrdersByStatus(status: string): Observable<OrderI[]> {
    const url = `${this.apiurl}?status=${status}`;
    return this.http.get<OrderI[]>(url, this.httpOptions);
  }


  // Crear una orden
  postOrder(order: OrderI): Observable<any> {
    return this.http.post(this.apiurl, order, this.httpOptions);
  }

  // Modificar una orden
  patchOrder(id: number, status: string): Observable<OrderI> {
    const url = `${this.apiurl}/${id}`;
    const body = { status: status };
    return this.http.patch<OrderI>(url, body, this.httpOptions);
  }
  getOrdersSubject(): BehaviorSubject<OrderI[]> {
    return this.ordersSubject;
  }

}