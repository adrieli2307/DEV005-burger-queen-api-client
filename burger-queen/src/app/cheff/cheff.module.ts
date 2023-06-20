import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOrdersComponent } from './back-orders/back-orders.component';
import { DoneOrdersComponent } from './done-orders/done-orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheffModule { }
