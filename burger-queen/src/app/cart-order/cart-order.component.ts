import { Component, OnInit, Input, Output } from '@angular/core';
import { OrderI } from '../interfaces/order.interface';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  @Input() statusFilter: string = '';


  orders: OrderI[] = [];
  timeResult: string = '';

  constructor(
    private authService: AuthService,
    private orderService: OrdersService,

  ) { }

  ngOnInit(): void {
    this.getOrders();

  }

  getOrders(): void {
    this.orderService.getOrdersByStatus(this.statusFilter).subscribe((result: OrderI[]) => {
      this.orders = result.map(o => ( 
        {
        ...o,
        totalTime: this.orderService.calculateDuration(o.dataEntry, o.dateProcessed)
      }
      ));
    });
  }
 // Método para cambiar status de orden e ingresar valor a dataProcessed
  sendOrder(id: number, order:OrderI) {
    order.dateProcessed = new Date ();
    this.orderService.patchOrder(id, 'delivered', order.dateProcessed ).subscribe(
      (order) => {
        const index = this.orders.findIndex((order) => order.id === id);
        this.orders.splice(index, 1)
      },
      (error) => {
        console.log('orden NEGADA', error);
      }
    );
  }
 // Método para filtrar productos de acuerdo a estatus
  getFilteredOrders(): OrderI[] {
    if (this.statusFilter) {
      return this.orders.filter(order => order.status === this.statusFilter)
    } else {
      return this.orders;
    }
  }
  
}

 