import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CheffComponent } from './cheff/cheff.component';
import { ManagerComponent } from './manager/manager.component';
import { WaiterComponent } from './waiter/waiter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ButtonsComponent } from './buttons/buttons.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheffComponent,
    ManagerComponent,
    WaiterComponent,
    CheffComponent,
    PageNotFoundComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  //providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
