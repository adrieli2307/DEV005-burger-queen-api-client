import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})




export class WaiterComponent {
 
constructor(private apiService:ProductsService){ }



 
ngOnInit(){
  this.getApi();
 
  //this.apiService.getProducts();
}



getApi(){
  return this.apiService.getDataFromAPI().subscribe((data) =>{
    console.log(data)
  });
  
}

rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg'


 }