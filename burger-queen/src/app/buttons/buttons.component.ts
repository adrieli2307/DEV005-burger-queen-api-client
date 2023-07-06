import { Component, Input } from '@angular/core';
import { ProductsI } from '../interfaces/products.interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input()
  quantityProduct: number;
  @Output() clickButtonEvent = new EventEmitter<number>();

  constructor() {
    this.quantityProduct = 0;

  }

  incrementQuantity(): void {
    this.clickButtonEvent.emit(1);
    //this.quantityProduct++
  }

  decrementQuantity(): void {
    // if (this.quantityProduct > 0) {
    //   this.quantityProduct--;
    // }
    this.clickButtonEvent.emit(-1);
  }
  //-------------prueba ------------
  /*incrementQuantity(product : number): void {
    product++;
  }
  decrementQuantity(product:number): void {
  if (product > 0) {
    product--;
  }
  }*/

  // incrementQuantity(product: ProductsI): void {
  //   product.quantity++;
  // }

  // decrementQuantity(product: ProductsI): void {
  //   if (product.quantity > 0) {
  //     product.quantity--;
  //   }
  // }

}
