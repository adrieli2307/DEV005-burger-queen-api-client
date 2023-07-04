import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsI } from '../interfaces/products.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  tokenAccess: string | null;

  constructor(private http: HttpClient) {
    this.tokenAccess = localStorage.getItem('token');
  }

  private apiurl: string = 'http://localhost:8080/products';

  getDataFromAPI(): Observable<ProductsI[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenAccess}`)
    return this.http.get<ProductsI[]>(this.apiurl, { headers })
  }


}




