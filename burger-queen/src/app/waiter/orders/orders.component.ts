import { Component } from '@angular/core';
import { ProductsI } from 'src/app/interfaces/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  // Invocación de datos API en pantalla 
  products: ProductsI[] = []
  filterType: string = ""


  constructor(private apiService:ProductsService, private authService:AuthService ){}

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    return this.apiService.getDataFromAPI().subscribe((data) => {
      console.log(data)
      this.products = data;
    });
      
    }

  filterByType(type:string){
  this.filterType=type
  console.log(this.filterByType)
 }
 //metodo para cerrar sesion
logout(){
  this.authService.logout();
}



}

