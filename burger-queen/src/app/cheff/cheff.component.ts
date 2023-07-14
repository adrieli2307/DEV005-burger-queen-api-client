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
      const x =     {
        "id": "1",
        "userId": 1,
        "client": "Prueba 1",
        "products": [
          {
            "qty": 1,
            "products": {
              "id": "1",
              "name": "Sandwich de jamón y queso",
              "price": 1000,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
              "type": "Desayuno",
              "dateEntry":new Date("2022-03-05 15:14:10") ,
              "quantity": 0
            }
          },
          {
            "qty": 1,
            "products": {
              "id": "2",
              "name": "Café americano",
              "price": 500,
              "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
              "type": "Desayuno",
              "dateEntry": new Date("2022-03-05 15:14:10") ,
              "quantity": 0
            }
          }
        ],
        "status": "pending",
        "dateEntry": "2022-03-05 15:14:10", dateProcessed : '2022-03-05 15:14:10'
      }
      const status1 = 'completed';
      const status = x.status; // Extraer el estado de la orden del objeto x
      this.orderService.patchOrder(x.id.toString(), status1).subscribe(
          updatedOrder => {
            console.log('Estado de orden actualizado:', updatedOrder);
            // Realiza acciones adicionales después de actualizar el estado de la orden
          },
          error => {
            console.error('Error al actualizar el estado de la orden:', error);
          }
        );
  }


  
  onSubmit(): void {
   
  }

  logout() {
    this.authService.logout();
  }
}
