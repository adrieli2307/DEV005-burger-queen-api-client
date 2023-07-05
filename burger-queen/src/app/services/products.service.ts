import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsI } from '../interfaces/products.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  tokenAccess: string | undefined;

  constructor(private http: HttpClient, dataLS : AuthService) {
    this.tokenAccess = dataLS.getCurrentUser()?.accessToken;
  }

  private apiurl: string = 'http://localhost:8080/products';

  getDataFromAPI(): Observable<ProductsI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`)
    return this.http.get<ProductsI[]>(this.apiurl, { headers })
  }

/*
  getProductByType(types:Array<string>){
    conts x = this.getDataFromAPI()

    const filñteredProducts = x.filter(x incluya types)
    reutrn filñteredProducts
  }
*/

}
