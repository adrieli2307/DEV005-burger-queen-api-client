import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsI } from '../interfaces/products.interface';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  tokenAccess: string | undefined;

  constructor(private http: HttpClient, userDataFromApi : AuthService) {

    this.tokenAccess = userDataFromApi.getCurrentUser()?.accessToken;

  }

  // Declaración de la variable para guardar endpoints de la api(products) 
  private apiUrl: string = 'http://localhost:8080/products';

 // Método para realizar la peticón Http ( data de productos)
  getProductsFromAPI(): Observable<ProductsI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`)
    return this.http.get<ProductsI[]>(this.apiUrl, { headers })
  }

  //Obtener productos por tipo cuando esta vacio trae todos y si se ingresa un tipo trae los unicos
  
   
  
   
    //console.log('holaaaa', dataTypes);
     // const filteredProducts = dataTypes.filter((p)=> types.includes(p.type));
      //console.log('jjjjj', filteredProducts);
    //return filteredProduct
















    getProductByType(types:string):Observable<ProductsI[]>{
      return this.getProductsFromAPI().pipe(map( (dataProducts:ProductsI[]) => {
       if(types !== ''){
         return dataProducts.filter(product => types === product.type)
       } else {
         return dataProducts;
       }
      } ))
       
      }
  
  }



