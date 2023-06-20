import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './manager/administrador.component';
import { WaiterComponent } from './waiter/waiter.component';
import { ChefComponent } from './cheff/chef.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    WaiterComponent,
    ChefComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
