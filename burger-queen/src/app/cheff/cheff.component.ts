import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { OrderI } from '../interfaces/order.interface';


@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css'],
})
export class CheffComponent implements OnInit {
  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png';
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg';

  orders: OrderI[] = [];

  constructor(
    private authService: AuthService,
    private orderService: OrdersService,
   
  ) {}

  ngOnInit(): void {
    //this.orderService.getOrders().subscribe((result) => {
      //console.log('resultado de ordenes', result);})
           this.orderService.getOrdersByStatus('completed').subscribe(
        orders => {
          // Aquí puedes hacer algo con las órdenes pendientes
          console.log('Órdenes pendientes:', orders);
        },
        error => {
          console.error('Error al obtener las órdenes:', error);
        }
      );
  }


  
  onSubmit(): void {
   
  }

  logout() {
    this.authService.logout();
  }
}
