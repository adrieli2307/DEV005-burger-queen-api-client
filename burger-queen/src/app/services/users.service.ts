import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private cliente: { nombre: string, numeroMesa: number} = { nombre: '', numeroMesa: 0 }
  constructor() { }

  setCliente(nombre: string, numeroMesa: number) {
    this.cliente = { nombre, numeroMesa };
  }

  getCliente() {
    return this.cliente;
  }
}
