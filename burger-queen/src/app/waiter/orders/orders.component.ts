import { Component } from '@angular/core';
import { ProductsI, Cliente } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { ButtonsComponent } from 'src/app/buttons/buttons.component';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { OrderI, ProductsOrderI } from 'src/app/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  // Invocación de datos API en pantalla 
  products: ProductsI[] = [];
  filterType: string = "";
  //Probando otro metodo de filtrado
  probandoType: ProductsI[] = [];

  cart: ProductsI[] = [];
  order:OrderI[] = [];


  constructor(private apiService: ProductsService) { }

  ngOnInit() {
    this.getApi();

    //Funcion para filtrar productos por tipo o completos
    /* this.apiService.getProductsByType('Almuerzo').subscribe((data)=>{
       this.probandoType = data
       console.log('probandodata', this.probandoType)})*/
  }

  /*-----------------------------Creacion de formulario de orden-----------------------------*/

  ordersForm = new FormGroup({
    'nameClient': new FormControl('', Validators.required),
    'numberTable': new FormControl('', Validators.required)
  })


  // Obtención de datos de input
  get nameClient() {
    return this.ordersForm.get('nameClient') as FormControl;
  }
  get numberTable() {
    return this.ordersForm.get('numberTable') as FormControl;
  }

  // Función para enviar a pedido

  loadOrder() {
  
    this.ordersForm.reset();
    this.cart = [];
    this.filteredProducts.forEach((products) => products.quantity = 0)
    console.log('funcionaaa')

  }

  /*------------------------------ Funciones manipular productos de api-------------------------*/

  //Función para obetner productos de api
  getApi() {
    return this.apiService.getProductsFromAPI().subscribe((data) => {
      console.log('mnnnnn', data);
      this.products = data;
      this.products.map((product) => {
        product.quantity = 0; // Inicializar la cantidad en 0
        this.apiService.filterByType(); // Filtrar los productos al obtener los datos de la API
      });
    });
  }

  //Función para obtener productos filtrados

  filterProductsByType() {
    if (this.filterType) {
      this.filteredProducts = this.products.filter(
        (product) => product.type === this.filterType
      );
    } else {
      const index = this.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  filterByType(type: string) {
    this.filterType = type;
    this.filterProductsByType();
  }




  /*---------------------Función para modificar cantidad de productos de carrito-----------------------*/
  
  // Función para agregar y quitar productos del carrito de compras
  updateQuantity(data: { eventValue: number, product: ProductsI }) {//{}
    const { eventValue, product } = data;

    if (eventValue > 0) { // 1
     
      // Agregar producto al carrito
      if (!this.cart.includes(product)) {
        this.cart.push(product);
      }
       product.quantity += eventValue;
      // Eliminar producto del carrito y disminuir 
    } 
    else if (eventValue < 0) { // -1

      product.quantity += eventValue;
      if (product.quantity <= 1) {
        const index = this.cart.indexOf(product);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
 
       }
      } 
    console.log('cart', this.cart)
  }


  // Función para mostrar totales de pedidos

  quantityOrder(){

   let sumaTotal = 0
   this.cart.forEach((product)=>{
   sumaTotal +=product.price*product.quantity})
  // const sumaTotal = priceQuantity

   return sumaTotal;
  }
  cancelar() {
    this.modalVisible = false;
  }


  // Funcion para inyectar data a api
/*
  const dataOrder : OrderI = {

      userId: 1,
      client: this.nameClient.value,//product.name
      products:{
        qty:,
        products:this.cart, 
      },
      status: 'pending', 
      dateEntry: '2022-03-05 15:00',

  }
*/



  


/*---------------------------Funciones para modal-----------------------------------*/
  modalVisible: boolean = false;

  openModal() {
    this.modalVisible = true; // Variable de control para mostrar el modal  
    // this.userService.setCliente(this.cliente.nombre, this.cliente.numeroMesa);

  }
  // Funcion inyectar informacion en orden de pedido 
}





 // updateQuantity(data:{eventValue:number, product:ProductsI}){
  // //   const product = {...this.filteredProducts.find(p => p.id = productId)} as ProductsI
  //   const {eventValue, product} = data;
  //   if (product.quantity=== 0 && eventValue < 1) {
  //     return;
  //   }
  //   product.quantity = product.quantity + eventValue;

  // } 