import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductI } from '../interfaces/Products';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  dataProducts: ProductI[] = [];
  filterBreakFast: ProductI[] = [];
  filterLunch: ProductI[] = [];



  constructor(private api: ProductsService) {
    //this.dataProducts = 

  }


  ngOnInit() {
    //this.hola();
    this.api.getProductsFromApi().subscribe((data) => {
      this.dataProducts = data;
   
      this.filterProduct(data)


      console.log('probanding', this.dataProducts)
    })
    // console.log('miraaa', this.dataProducts)
    //  this.loadData();
  };

   filterProduct(allProducts : ProductI[]) : void{
    this.filterBreakFast =  allProducts.filter((index) => index.type ==='Desayuno' );
    console.log('desayuno', this.filterBreakFast)
    this.filterLunch =  allProducts.filter((index) => index.type ==='Almuerzo' )
    console.log('almuerzo', this.filterLunch)
      }


  //  console.log(this.dataProducts)

  /* loadData(){
    this.api.loadProductsFromApi().subscribe((data: ProductI[]) => {

      this.data = data;

    console.log('dataaa', this.data ) 

    })
   
  }*/




  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg'
}