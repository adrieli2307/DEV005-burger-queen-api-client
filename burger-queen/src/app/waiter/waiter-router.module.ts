import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes.component';

const route: Routes = [{
  path: "menu",
  component: MenuComponent,
},
{
  path: "pedidos-pendientes",
  component: PedidosPendientesComponent,
}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
exports: [RouterModule]
})
export class WaiterRouterModule { }
