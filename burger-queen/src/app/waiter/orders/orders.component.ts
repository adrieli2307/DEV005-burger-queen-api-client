import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  // Invocación de datos API en pantalla 
  products: any[] = []

  constructor(private apiService:ProductsService){}

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    return this.apiService.getDataFromAPI().subscribe((data) => {
      console.log(data)
      this.products = data;
    });

  }
  mostrarTabla: boolean = true;
  onClick() {
    // Aquí puedes agregar la lógica que deseas ejecutar al hacer clic en el botón
    this.mostrarTabla = !this.mostrarTabla;
    console.log('Botón clickeado');
    // Realiza acciones adicionales según sea necesario
  }
  

  
}
