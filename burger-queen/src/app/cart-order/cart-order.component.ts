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


  constructor(
    private authService: AuthService,
    private orderService: OrdersService,

  ) { }

  ngOnInit(): void {

    this.orderService.getOrdersSubject().subscribe(result=>{
      this.orders = result;
    })

    this.getOrders();

  }

  getOrders(): void {
   
    this.orderService.getOrdersByStatus(this.statusFilter).subscribe((result: OrderI[]) => {
      this.orders = result;
      console.log('holaaa', result);
    });
  }
  sendOrder(id: number) {
    this.orderService.patchOrder(id, 'delivered').subscribe(
      (order) => {
        const index = this.orders.findIndex((order) => order.id === id);
        console.log('probando', index)
        this.orders.splice(index, 1)
        console.log('orden enviada', order);
      },
      (error) => {
        console.log('orden NEGADA', error);
      }
    );
  }

  getFilteredOrders(): OrderI[] {
    if (this.statusFilter) {
      return this.orders.filter(order => order.status === this.statusFilter)
    } else {
      return this.orders;
    }
  }
}

/*getPending(): void {
  this.orderHttpSvc.getOrder('pending').subscribe({
    next: (res) => {
      this.orders = res;
    },
    error: () => {
      this.toastr.error('Loading error orders.');
    },
  });
}*/