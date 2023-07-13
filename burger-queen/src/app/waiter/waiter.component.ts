import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})

export class WaiterComponent implements OnInit {
  constructor(private authService:AuthService){}
  nameUser:string | undefined = this.authService.getCurrentUser()?.user.email;
  


  ngOnInit() {
    }

  logout(){
    this.authService.logout();
  }







  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg'
}