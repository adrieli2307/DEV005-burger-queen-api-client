import { ProductsI } from "./products.interface"


export interface ProductsOrderI{
   qty:number;
   products:ProductsI

}

export interface OrderI{
  userId: number;
  client: string;//product.name
  products:ProductsOrderI[]; //cart
  status: string; 
  dateEntry: string;
}