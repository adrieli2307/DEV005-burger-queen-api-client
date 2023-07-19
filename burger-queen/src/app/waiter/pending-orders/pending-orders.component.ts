import { Component } from '@angular/core';
import { CartOrderComponent } from 'src/app/cart-order/cart-order.component';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent {

  probandoNotificacion(event :string | number){
    console.log('holis', event)
  }
}
