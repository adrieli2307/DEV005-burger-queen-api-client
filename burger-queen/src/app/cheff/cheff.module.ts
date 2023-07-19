import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOrdersComponent } from './back-orders/back-orders.component';
import { DoneOrdersComponent } from './done-orders/done-orders.component';
import { RouterModule, Routes } from '@angular/router';
import { CartOrderComponent } from '../cart-order/cart-order.component';
const routes : Routes = [
  {
    path: '',
    redirectTo: 'back-orders',
    pathMatch: 'full'

  },
  {
    path:'back-orders',
    component: BackOrdersComponent
  },
  {
    path:'done-orders',
    component: DoneOrdersComponent
  }
]
@NgModule({
  declarations: [
    BackOrdersComponent,
    DoneOrdersComponent,
    CartOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,CartOrderComponent]
})
export class CheffModule { }
