import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsI } from '../interfaces/products.interface';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  //responseData:ProductsI[]
  tokenAccess: string | null;

  constructor(private http: HttpClient) {
    //this.responseData = []; 
    this.tokenAccess =  localStorage.getItem('token');}

  private apiurl:string = 'http://localhost:8080/products';
  

 
  getDataFromAPI(): Observable<ProductsI[]>{
    const headers = new HttpHeaders().set('Authorization',`Bearer ${this.tokenAccess}` )
    return this.http.get<ProductsI[]>(this.apiurl, {headers})
  }
  
  //getProducts(): ProductsI[]{
   // console.log(this.responseData)
    //return this.responseData
  //}
  //getToken(): string | null {
    //localStorage.getItem(Token);
     //this.tokenAccess =  localStorage.getItem('token');
     //return this.tokenAccess

  }
  



