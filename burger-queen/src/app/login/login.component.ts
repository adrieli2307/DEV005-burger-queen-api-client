import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  constructor() {   }

  ngOnInit(): void {

  }

  iniciar_sesion(email:string){
    console.log(email)
  }

  imagenes:string = 'https://i.ibb.co/vZtH272/imgLogo.png'
}
