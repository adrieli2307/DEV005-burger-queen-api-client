import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderI } from 'src/app/interfaces/order.interface';
import { ProductsToOrderI } from 'src/app/interfaces/order.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-orders',
  templateUrl: './back-orders.component.html',
  styleUrls: ['./back-orders.component.css'],
})
export class BackOrdersComponent implements OnInit {
  orders: OrderI[] = [];
 
  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png';
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg';
  status = 'pending'

  constructor(
    private authService: AuthService,
    private orderService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
     
    /*this.orders = [
      {
        "id": 1,
        "userId": 1,
        "client": "Jude Milhon",
        "products": [
          {
            "qty": 1,
            "product": {
              "id": "1",
              quantity:0,
              "name": "Sandwich de jamón y queso",
              "price": 1000,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
              "type": "Desayuno",
              "dateEntry": new Date("2022-03-05 15:14:10")
            }
          },
          {
            "qty": 1,
            "product": {
              quantity:0,
              "id": "2",
              "name": "Café americano",
              "price": 500,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
              "type": "Desayuno",
              "dateEntry": new Date("2022-03-05 15:14:10")
            }
          }
        ],
        "status": "pending",
        "dateEntry": "2022-03-05 15:14:10",
        "dateProcessed":"2022-03-05 15:00"
      },
    ]*/
    
    this.getOrdersPending();
  }
  
  getOrdersPending(): void {
    this.orderService.getOrdersByStatus(this.status).subscribe((result: OrderI[]) => {
        this.orders = result;
        console.log('holaaa',result);
      });
  }
  sendOrder(id:number) {
    this.orderService.patchOrder(id, 'pending').subscribe(
      (order) => {
        const index = this.orders.findIndex((order) => order.id === id);
        console.log('probando', index)
        this.orders.splice(index,1)
        console.log('orden enviada', order)
      },
      (error) => {
        console.log('orden NEGADA', error);
      }
    );
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
