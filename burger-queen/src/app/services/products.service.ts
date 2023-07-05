import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductI } from '../interfaces/Products';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 // private dataProducts: ProductI[] = [];
  private accessToken: string | undefined;














































  constructor(private http: HttpClient, private authS: AuthService) {
    this.accessToken = this.authS.getCurrentUser()?.accessToken;
    // this.getProductsFromApi();
    // this.dataProducts = [];
  }

   getProductsFromApi(): Observable<ProductI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`)
    // const params = new HttpParams().set('_page', '1').set('_limit', '100');
    return this.http.get<ProductI[]>('http://localhost:8080/products', { headers /*params*/ })
   
  }




  // getProductsFromApi(): Observable<ProductI[]> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`)
  //   // const params = new HttpParams().set('_page', '1').set('_limit', '100');
  //   const response =  this.http.get<ProductI[]>('http://localhost:8080/products', { headers /*params*/ })
  //   return response
   
  // }

  /*
    loadProductsFromApi(): Observable<ProductI[]> {
     return this.getProductsFromApi().subscribe((data)=>{
      this.dataProducts = data;
  
     })
      // this.getProductsFromApi().subscribe((data:ProductI[]) => {
      //   this.dataProducts = data;
      // })
    }*/

/*
  getProducts():ProductI[]{
    return this.dataProducts;
  }*/


}
