import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaiterComponent } from './waiter/waiter.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [{
  path: "waiter",
  component: WaiterComponent,
  loadChildren:()=> import("../app/waiter/waiter-moduls.module").then(m=>m.WaiterModulsModule)
  
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
