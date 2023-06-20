import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRouterModule } from './waiter-router.module';
import { MenuComponent } from './menu/menu.component';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';


@NgModule({
  declarations: [
    MenuComponent, 
    PedidosPendientesComponent
  ],
  imports: [
    CommonModule,
    WaiterRouterModule
  ]
})
export class WaiterModulsModule { }
