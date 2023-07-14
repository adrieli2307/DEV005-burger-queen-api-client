import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';
import { OrderI } from '../interfaces/order.interface';
import { ProductsToOrderI } from '../interfaces/order.interface';

@Component({
  selector: 'app-cheff',
  templateUrl: './cheff.component.html',
  styleUrls: ['./cheff.component.css'],
})
export class CheffComponent implements OnInit {
  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png';
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg';
  constructor(
    private authService: AuthService,
  ) {}
  logout() {
    this.authService.logout();
  }
  ngOnInit(): void {
    
  }
}
