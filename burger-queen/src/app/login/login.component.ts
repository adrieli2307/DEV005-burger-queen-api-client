import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  constructor(private router: Router,private user: AuthService ) {   }
  

  get correo(){
    return this.loginForm.get('correo') as FormControl;
  }
  get clave(){
    return this.loginForm.get('clave') as FormControl;
  }

  sendForm(){
    console.log(this.loginForm.value);
    const ruta = '../manager';
    this.router.navigate([ruta]);
  }

  loginForm = new FormGroup ({
    'correo': new FormControl('', [Validators.required, Validators.email]),
     'clave': new FormControl('', Validators.required),
  })  
 
  

  

  ngOnInit(): void {
    this.user.getUser().subscribe(()=>{console.log})

  }
  
  


  imagenes:string = 'https://i.ibb.co/vZtH272/imgLogo.png'
}
