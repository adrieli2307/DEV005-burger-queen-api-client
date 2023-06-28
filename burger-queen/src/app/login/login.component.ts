import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {LoginI} from '../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm = new FormGroup ({
    'email': new FormControl('', Validators.required),
     'password': new FormControl('', Validators.required)
  })  

  constructor(private router: Router,private user: AuthService ) {   }
  

  get correo(){
    return this.loginForm.get('email') as FormControl;
  }
  get clave(){
    return this.loginForm.get('password') as FormControl;
  }

  onLogin(form:LoginI){
    this.user.loginByEmail(form).subscribe(data =>{
      console.log(data);
    })
  }


 
  

  

  ngOnInit(): void {
    //this.user.getUser().subscribe(()=>{console.log})

  }
  
  


  imagenes:string = 'https://i.ibb.co/vZtH272/imgLogo.png'
}
