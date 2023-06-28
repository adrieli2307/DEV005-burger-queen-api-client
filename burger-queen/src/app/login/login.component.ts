import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
<<<<<<< HEAD
import {LoginI} from '../interfaces/login.interface';
=======
import { InfoLoginI } from '../interfaces/InfoLogin';
import { LoginResponseI } from '../interfaces/InfoLoginResponse';
>>>>>>> origin/caro

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
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
=======
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: AuthService) { }


  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  })

  // Extracción de cada valor del formGroup
  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
>>>>>>> origin/caro
    return this.loginForm.get('password') as FormControl;
  }
  // Función para enviar información 

<<<<<<< HEAD
  onLogin(form:LoginI){
    this.user.loginByEmail(form).subscribe(data =>{
      console.log(data);
    })
  }


 
  

  

  ngOnInit(): void {
    //this.user.getUser().subscribe(()=>{console.log})
=======
  sendForm() {
    this.user.loginByEmail(this.loginForm.value as InfoLoginI).subscribe((data : LoginResponseI) => {
        
      console.log( 'hola', data.user.role);
      if(data.user.role==='waiter'){
        localStorage.setItem('token',data.accessToken)
        this.router.navigate(['../waiter']);
      }
      else if(data.user.role==='admin'){
        localStorage.setItem('token',data.accessToken)
        this.router.navigate(['../manager']);
      }
      
    },
    (error) => {
        console.log('newError', error)
      });
   
  }

  ngOnInit(): void {
    // this.user.getUser().subscribe(()=>{console.log})
>>>>>>> origin/caro

  }




  imagenes: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
}
