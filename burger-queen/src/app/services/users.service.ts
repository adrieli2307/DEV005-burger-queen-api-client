import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/products.interface';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  cliente: Cliente[] = [];

  constructor() { }

  setCliente(nombre: string, numeroMesa: number): Observable<Cliente[]> {
    this.cliente = [{ nombre, numeroMesa }];
    return of(this.cliente);
  }

}
