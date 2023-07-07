import { Component } from '@angular/core';
import { ProductsI } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from 'src/app/services/auth.service';
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
  productsByType:ProductsI[]=[];

  constructor(private apiService: ProductsService) {}

  ngOnInit() {
    this.getApi();
  
    this.apiService.getProductByType('').subscribe((data) =>{
      
    this.productsByType = data;
    console.log('holiiiii', this.productsByType);
    });
   
  }

  getApi() {
    return this.apiService.getProductsFromAPI().subscribe((data) => {
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

  updateQuantity(data:{eventValue:number, product:ProductsI}){
  //   const product = {...this.filteredProducts.find(p => p.id = productId)} as ProductsI
    const {eventValue, product} = data;
    if (product.quantity=== 0 && eventValue < 1) {
      return;
    }
    product.quantity = product.quantity + eventValue;

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
