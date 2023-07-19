import { Component } from '@angular/core';
import { ProductsI } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { ButtonsComponent } from 'src/app/buttons/buttons.component';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { OrderI, ProductsToOrderI } from '../../interfaces/order.interface';
import { AuthService } from '../../services/auth.service';
import { ToastrService, } from 'ngx-toastr';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  //Variable para guardar email de usuario
  nameUser: string | undefined = this.authService.getCurrentUser()?.user.email;
  // Invocación de datos API en pantalla 
  products: ProductsI[] = [];
  // Arreglo para almacenar los productos filtrados
  filteredProducts: ProductsToOrderI[] = [];
  // Arreglo para guardar productos seleccionados 
  cart: ProductsToOrderI[] = [];

  // variable para guardar orden
  order: OrderI;
  // variable para iniciar en desayuno
  filterType: string = '';
  // variable para activar boton 
  breakFastActive: boolean = true;
  lunchActive: boolean = false;
  // variable para mostrar mensaje;
  message: string = '';
  // variable para extraer cantidad de productos
  totalProductSelected: number = 0;

  constructor(private apiService: ProductsService, private authService: AuthService, private toast: ToastrService, private orderService: OrdersService) {
   
    this.order = {
      id: 0,
      userId: 0,
      client: '',
      products: [],
      status: '',
      dataEntry: new Date(''),
      dateProcessed: new Date(''),
      priceTotal: 0,
    };

  }
  ngOnInit() {
    this.getProductsApi();
    this.orderDone();
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
    this.orderDone();
    this.sendOrderApi();
    // Método para enviar notificaciones al enviar pedido
    this.toast.success('El pedido ha sido enviado exitosamente', '', {
      toastClass: 'success-toastSend',
      closeButton: true,
      enableHtml: true,
      tapToDismiss: true,
    });
    // Método para resetear el formulario
    this.resetOrder();
  }

  /*------------------------------ Funciones manipular productos de api-------------------------*/

  // Método para obetner productos de api e insertarlos dentro de otra variable para insertarlos dentro de orden
  getProductsApi() {
    return this.apiService.getProductsFromAPI().subscribe((data) => {
      this.products = data
    });
  }

  // Método para filtrar productos y agregar nueva propiedad 
  filterProducts(type: string) {
    this.filteredProducts = [];
    const productFiltered = this.apiService.getProductsByType(type, this.products)
    productFiltered.forEach(product => {
      const productObj = {
        qty: 0,
        product: product,
      }
      this.filteredProducts.push(productObj)
    })

  }

  /*---------------------Función para modificar cantidad de productos de carrito-----------------------*/

  // Método para agregar y quitar productos del carrito de compras
  updateQuantity(data: { eventValue: number, product: ProductsToOrderI }) {
    const { eventValue, product } = data;
    if (eventValue > 0) { 
      // Agregar producto al carrito
      const idProduct = this.cart.map(product => product.product.id);
      if (!idProduct.includes(product.product.id)) {
        this.cart.push(product);
      }
      product.qty += eventValue;

    }
    // Eliminar producto del carrito y disminuir 
    else if (eventValue < 0) { // -1
      product.qty += eventValue;
      if (product.qty <= 0) {
        const index = this.cart.indexOf(product);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.orderDone();
  }


 // Método para armar el resumen de pedido
  orderDone(): void {
    const userId = this.authService.getCurrentUser()?.user.id;
    let sumTotal = 0;
    this.cart.forEach((product) => sumTotal += product.qty * product.product.price)
    if (userId !== undefined) {
      const order = {
        id: 0,
        userId: userId,
        client: this.nameClient.value,
        products: this.cart,
        status: 'pending',
        dataEntry: new Date(''),
        dateProcessed: new Date(''),
        priceTotal: sumTotal,
      }
      // Inyección de orden a variable
      this.order = order;

    }
  }
 // Método para enviar pedido a api
  sendOrderApi() {
    this.order.dataEntry = new Date();
    this.order.id =  new Date().getTime();
    this.orderService.postOrder(this.order).subscribe((result)=>console.log('te he enviado..', result))

  }


  // Método para resetear formulario y limpiar variable de order
  resetOrder() {
    this.ordersForm.reset();
    this.cart = [];
    this.order = {
      id: 0,
      userId: 0,
      client: '',
      products: [],
      status: '',
      dataEntry: new Date(''),
      dateProcessed: new Date(''),
      priceTotal: 0,
    };
    this.filteredProducts.forEach((product) => {
      product.qty = 0;
    });
  }
  // Método para activar botones de filtrado
  activeBreakFast() {
    this.breakFastActive = true;
    this.lunchActive = false;
  }

  activeLunch() {
    this.breakFastActive = false;
    this.lunchActive = true;
  }

}