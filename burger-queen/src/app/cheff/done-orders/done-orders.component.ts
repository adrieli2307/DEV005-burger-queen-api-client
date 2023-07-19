import { Component, OnInit } from '@angular/core';
import { OrderI } from 'src/app/interfaces/order.interface';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-done-orders',
  templateUrl: './done-orders.component.html',
  styleUrls: ['./done-orders.component.css']
})
export class DoneOrdersComponent implements OnInit{
  durationResult: string = '';
  orders: OrderI[]=[];
  

  constructor(
    
    private orderService: OrdersService,
   
  ) {}

  ngOnInit(): void {
    this.durationResult = this.orderService.calculateDuration('2023-07-17 09:00:', '2023-07-17 10:30:00')
    this.getOrdersDelivered();
    
  }

  getOrdersDelivered(): void {
    this.orderService.getOrdersByStatus('delivered').subscribe((result: OrderI[]) => {
        this.orders = result;
        console.log('holaaa',result);
      });
  }

  timeOrder(dataEntry:string, dateProcessed:string):number{
    const timeEntry = new Date(dataEntry).getTime();
    const timeProcessed = new Date(dateProcessed).getTime();
    //Calculo del tiempo de entrega en milisegundos
    const timeDelivery = timeEntry - timeProcessed;
    return timeDelivery;
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
