import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  products: any[] = []

  constructor(private apiService:ProductsService){}

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    return this.apiService.getDataFromAPI().subscribe((data) => {
      console.log(data)
      this.products = data;
    });

  }
}
