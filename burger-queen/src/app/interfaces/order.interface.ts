import { ProductsI } from "./products.interface"


export interface ProductsToOrderI{
  qty:number;
  product:ProductsI
}
export interface OrderI{
 id:number;
 userId: number;
 client: string;//product.name
 products:ProductsToOrderI[]; //cart
 status: string;
 dateEntry: Date;
 dateProcessed:Date;
 priceTotal:number;
}