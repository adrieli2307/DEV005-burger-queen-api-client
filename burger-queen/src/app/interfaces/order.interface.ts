import { ProductsI } from "./products.interface"


export interface ProductsOrder{
  // qty:number;
   products:ProductsI

}

export interface OrderI{
  userId: number;
  client: string;//product.name
  products:ProductsI[]; //cart
  status: string; 
  dateEntry: string;
}