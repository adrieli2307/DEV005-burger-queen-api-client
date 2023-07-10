import { Component } from '@angular/core';
import { ProductsI, Cliente } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  // Invocación de datos API en pantalla
  products: ProductsI[] = [];
  filterType: string = "";
  cliente: Cliente = {
    nombre: '',
    numeroMesa: 0
  };

  constructor(
    private apiService: ProductsService,
    private userService: UsersService
  ) {}
  ngOnInit() {
    this.getApi();
  }

  //Agregar formulario de orders para validación
  ordersForm = new FormGroup({
    nameClient: new FormControl('', Validators.required),
    numberTable: new FormControl('', Validators.required),
  });

  // Extracción de cada valor del formGroup
  get nameClient() {
    return this.ordersForm.get('nameClient') as FormControl;
  }
  get numberTable() {
    return this.ordersForm.get('numberTable') as FormControl;
  }

  sendOrdersForm(){
   console.log('ttttt', this.nameClient.value);

  }



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

  updateQuantity(data: { eventValue: number; product: ProductsI }) {
    //   const product = {...this.filteredProducts.find(p => p.id = productId)} as ProductsI
    const { eventValue, product } = data;
    console.log('hhhhhh', eventValue, product);
    if (product.quantity === 0 && eventValue < 1) {
      return;
    }
    product.quantity = product.quantity + eventValue;

    if (eventValue > 0) {
      const existProduct = this.cart.find((p) => p.id === product.id);
      if (existProduct) {
        existProduct.quantity = product.quantity;
      } else {
        console.log('jajajajaj', this.cart.push(product));
      }
    } else {
      const index = this.cart.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  filterByType(type: string) {
    this.filterType = type;
  }

  //Modal

  modalVisible: boolean = false;
  openModal() {
    this.modalVisible = true; // Variable de control para mostrar el modal  
    this.userService.setCliente(this.cliente.nombre, this.cliente.numeroMesa)
      .subscribe(() => {
        console.log('Cliente establecido correctamente');
      });
    
  }

  enviar() {
    this.modalVisible = false;
    this.cliente.nombre = '';
    this.cliente.numeroMesa = 0;
  }
  cancelar(){
    this.modalVisible=false;
  } 


