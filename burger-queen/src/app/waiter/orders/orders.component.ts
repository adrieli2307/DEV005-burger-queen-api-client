import { Component } from '@angular/core';
import { ProductsI } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  // Invocación de datos API en pantalla 
  products: ProductsI[] = [];
  filterType: string = "";

  constructor(private apiService: ProductsService) { }

  ngOnInit() {
    this.getApi();

  }

  getApi() {
    return this.apiService.getProductsFromAPI().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.products.map((product) => {
        product.quantity = 0; // Inicializar la cantidad en 0
        this.apiService.filterByType(); // Filtrar los productos al obtener los datos de la API
      });

    });
  }

  updateQuantity(data: { eventValue: number, product: ProductsI }) {
    //   const product = {...this.filteredProducts.find(p => p.id = productId)} as ProductsI
    const { eventValue, product } = data;
    if (product.quantity === 0 && eventValue < 1) {
      return;
    }
    product.quantity = product.quantity + eventValue;

  }

  filterByType(type: string) {
    this.filterType = type;
  }

//Modal

  modalVisible: boolean = false;

  openModal() {
    this.modalVisible = true; // Variable de control para mostrar el modal   
  }

  enviar(){
    this.modalVisible=false;
  }

}