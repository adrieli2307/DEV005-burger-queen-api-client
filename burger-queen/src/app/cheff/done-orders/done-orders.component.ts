import { Component, OnInit } from '@angular/core';
import { OrderI } from 'src/app/interfaces/order.interface';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-done-orders',
  templateUrl: './done-orders.component.html',
  styleUrls: ['./done-orders.component.css']
})
export class DoneOrdersComponent implements OnInit{
  orders: OrderI[]=[];
  currentDataTime: Date = new Date();

  constructor(
    
    private orderService: OrdersService,
   
  ) {}

  ngOnInit(): void {
    this.getOrdersDelivered();
    setInterval(() => {
      this.currentDataTime = new Date();
    }, 1000);
    
  }

  getOrdersDelivered(): void {
    this.orderService.getOrdersByStatus('delivered').subscribe((result: OrderI[]) => {
        this.orders = result;
        console.log('holaaa',result);
      });
  }
  /*sendOrder(id:string) {
    this.orderService.patchOrder(id, 'delivered').subscribe(
      (order: OrderI) => {
        console.log('orden enviada', order);
      },
      (error) => {
        console.log('orden NEGADA', error);
      }
    );
  }*/

  
}
