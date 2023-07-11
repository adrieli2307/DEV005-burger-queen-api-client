import { Component, Input } from '@angular/core';
import { ProductsI } from '../interfaces/products.interface';
import { Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() quantityProduct: number;
  @Output() clickButtonEvent = new EventEmitter<number>();
  
  

  constructor(private userService:UsersService) {
    this.quantityProduct = 0;

  }

  incrementQuantity(): void {
    this.clickButtonEvent.emit(1);
   // this.clickButtonEvent.emit('Mentira soy libre');

  }

  decrementQuantity(): void {
     this.clickButtonEvent.emit(-1);
    // this.clickButtonEvent.emit('Nooo es verdad :(');
  }
 

}
