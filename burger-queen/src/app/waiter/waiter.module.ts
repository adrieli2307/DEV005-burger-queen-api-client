import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';
import { ButtonsComponent } from '../buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheffModule } from '../cheff/cheff.module';

const routes : Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'

  },
  {
    path:'orders',
    component: OrdersComponent,
  },
  {
    path:'pending-orders',
    component: PendingOrdersComponent
  }
]


@NgModule({
  declarations: [
    OrdersComponent,
    PendingOrdersComponent,
    ButtonsComponent,
    
  
 
 

  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CheffModule,
    
    
 
  ],
  
  exports: [RouterModule]
})
export class WaiterModule { }
