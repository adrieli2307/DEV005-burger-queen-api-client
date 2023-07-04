import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductsI } from '../interfaces/products.interface';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})




export class WaiterComponent {
  products: ProductsI[] = [];

  filteredProducts: ProductsI[] = [];
  productTypes: string[] = [];

  selectedType:string = '';
 
constructor(private apiService:ProductsService){ }



 
ngOnInit(){
  this.getApi();
 
  //this.apiService.getProducts();
}



getApi(){
  return this.apiService.getDataFromAPI().subscribe((data) =>{
    this.products = data;
    this.filteredProducts = data;
    this.getProductsTypes();
  });
  
}

getProductsTypes(){
  this.productTypes = Array.from(new Set(this.products.map((product)=> product.type)));
}

filterProducts(){
  console.log(this.filterProducts)
  if(this.selectedType !==''){
    (this.filteredProducts = this.products.filter((product) => product.type === this.selectedType));
  } else{
    this.filteredProducts = this.products;
  }
}
rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg'


 }