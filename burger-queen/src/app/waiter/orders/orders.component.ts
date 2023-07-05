import { Component } from '@angular/core';
import { ProductsI } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { ButtonsComponent } from 'src/app/buttons/buttons.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  // Invocación de datos API en pantalla 
  products: ProductsI[] = [];
  filteredProducts: ProductsI[] = []; // Arreglo para almacenar los productos filtrados
  filterType: string = "";

  constructor(private apiService: ProductsService) {}

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    return this.apiService.getDataFromAPI().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.products.map((product) => {
        product.quantity = 0; // Inicializar la cantidad en 0
      });
      this.filterProductsByType(); // Filtrar los productos al obtener los datos de la API
    });
  }

  filterProductsByType() {
    if (this.filterType) {
      this.filteredProducts = this.products.filter(
        (product) => product.type === this.filterType
      );
    } else {
      this.filteredProducts = this.products; // Si no hay tipo de filtro, mostrar todos los productos
    }
  }

  updateQuantity(valueToAdd: number, productId: string, index: number){
    const product = {...this.products.find(p => p.id = productId)} as ProductsI
    if (!product || (product.quantity= 0 && valueToAdd < 1)) {
      return;
    }
    product.quantity = product.quantity + valueToAdd;
    this.products[index] = product;
    product.name = "holaaaaa"
    this.products = [...this.products]
    console.log(this.products)

  } 

  incrementQuantity(product: ProductsI): void {
    product.quantity++;
  }

  decrementQuantity(product: ProductsI): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  filterByType(type: string) {
    this.filterType = type;
    this.filterProductsByType();
  }
}