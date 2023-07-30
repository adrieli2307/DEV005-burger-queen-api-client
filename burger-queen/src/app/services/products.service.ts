import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsI } from '../interfaces/products.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs';
import { ProductsToOrderI } from '../interfaces/order.interface';



@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  tokenAccess: string | undefined;

  constructor(private http: HttpClient, userDataFromApi: AuthService) {
   // Obtención de token de acceso
    this.tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;

  }

  // Declaración de la variable para guardar endpoints de la api(products) 
  private apiUrl: string = 'http://localhost:8080/products';

  // Método para realizar la peticón Http ( data de productos)
  getProductsFromAPI(): Observable<ProductsI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`)
    return this.http.get<ProductsI[]>(this.apiUrl, { headers })
  }
  // Método para filtrar productos por tipo 
  getProductsByType(types: string, data: ProductsI[]) {
      if (types !== ''){
        return data.filter((item: ProductsI) => item.type === types)
      } else {
        return data;
      }
     }


}