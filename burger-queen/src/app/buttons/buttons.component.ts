import { Component, Input } from '@angular/core';
import { ProductsI } from '../interfaces/products.interface';
import { Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() quantityProduct: number;
  @Output() clickButtonEvent = new EventEmitter<number>();

  constructor(private toast:ToastrService) {
    this.quantityProduct = 0;

    }
  incrementQuantity(): void {
    this.clickButtonEvent.emit(1);
    this.toast.success('Se ha agregado un producto','',{
      toastClass: 'success-toast', 
      closeButton: true,
      enableHtml: true,
      tapToDismiss: true,}
      )
  }

  decrementQuantity(): void {
     this.clickButtonEvent.emit(-1);
     this.toast.warning('Se ha eliminado un producto','',{
      toastClass: 'warning-toast', 
      closeButton: true,
      enableHtml: true,
      tapToDismiss: true,}
      )

  }
 

}
