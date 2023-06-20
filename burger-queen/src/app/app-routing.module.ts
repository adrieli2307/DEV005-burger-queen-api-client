import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CheffComponent } from './cheff/cheff.component';
import { ManagerComponent } from './manager/manager.component';
import { WaiterComponent } from './waiter/waiter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'kitchen',
    component: CheffComponent,
    loadChildren: () => import('../app/cheff/cheff.module').then(m => m.CheffModule)
  },
  {
    path: 'waiter',
    component: WaiterComponent,
    loadChildren: () => import('../app/waiter/waiter.module').then(m => m.WaiterModule)
  },
  {
    path: 'manager',
    component: ManagerComponent,
    loadChildren: () =>  import('../app/manager/manager.module').then(m => m.ManagerModule)
   
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
