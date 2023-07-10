export interface ProductsI {
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
    dateEntry?: Date;
    quantity: number;
}

export interface Cliente {
    nombre: string;
    numeroMesa: number;
  }