import { ProductsI } from "./products.interface"


export interface ProductsOrder{
  qty:number;
   product:ProductsI

}

export interface OrderI{
  id:number;
  userId: number;
  client: string;//product.name
  products:ProductsOrder[]; //cart
  status: string; 
  dateEntry: string;
  dateProcessed:string;

}