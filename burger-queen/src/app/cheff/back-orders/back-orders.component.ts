import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OrdersService } from '../../services/orders.service';
import { OrderI } from 'src/app/interfaces/order.interface';
import { ProductsToOrderI } from 'src/app/interfaces/order.interface';
import { Router } from '@angular/router';
import { CartOrderComponent} from '../../cart-order/cart-order.component';

@Component({
  selector: 'app-back-orders',
  templateUrl: './back-orders.component.html',
  styleUrls: ['./back-orders.component.css'],
})
export class BackOrdersComponent implements OnInit {
  //orders: OrderI[] = [];

  currentDataTime: Date = new Date();
  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png';
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg';

  constructor(
    private authService: AuthService,
    private orderService: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
   
    // this.getOrdersPending();
  
  }
}