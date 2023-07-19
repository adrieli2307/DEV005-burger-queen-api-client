import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsI } from '../interfaces/products.interface';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
<<<<<<< HEAD
=======
import { tap, map } from 'rxjs';
import { ProductsToOrderI } from '../interfaces/order.interface';

>>>>>>> origin/caro


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  tokenAccess: string | undefined;
  products: ProductsI[] = [];
  filteredProducts: ProductsI[] = []; // Arreglo para almacenar los productos filtrados
  filterType: string = "";
  

  constructor(private http: HttpClient, userDataFromApi: AuthService) {
   // Obtención de token de acceso
    this.tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;

  }

  // Declaración de la variable para guardar endpoints de la api(products) 
  private apiUrl: string = 'http://localhost:8080/products';

  // Método para realizar la peticón Http ( data de productos)
  getProductsFromAPI(): Observable<ProductsI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`);
    return this.http.get<ProductsI[]>(this.apiUrl, { headers }).pipe(
      tap((products) => {
        this.products = products;
        this.filterByType(); // Filtrar los productos al obtener los datos de la API
      })
    );
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
