import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { InfoLoginI } from '../interfaces/InfoLogin';
import { UserResponseErrorI, UserResponseI, } from '../interfaces/UserResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Variable para guardar mensaje de error de la api al momento de logearse con datos incorrectos
  errorApi:string | null = null;
  constructor(private router: Router, private userFromApi: AuthService) {
   }
  // Creacion de FormGroup para el formulario de login
  loginForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
  })
  // Extracción de cada valor del formGroup
  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  // Evento click para hacer petición Http
  sendForm() {
    this.userFromApi.responseUserFromApi(this.loginForm.value as InfoLoginI).subscribe((data: UserResponseI) => {
      // Condicionales para navegar a rutas de acuerdo al rol
      if (data.user.role === 'waiter') {
        console.log('sdsdsd', data.accessToken)
        this.router.navigate(['../waiter/orders']);
      } else if (data.user.role === 'admin') {
        this.router.navigate(['../manager']);
      } else if (data.user.role === 'cheff') {
        this.router.navigate(['../kitchen/back-orders']);
      }
    },
      (error: UserResponseErrorI) => {
        this.errorApi = error.error;
        console.error(error)
      });
  }
  ngOnInit(): void {
  }
  // Links para insertar en html
  rutaImgLogo: string = 'https://i.ibb.co/vZtH272/imgLogo.png'
  rutaImgFondo: string = 'https://i.ibb.co/VpkgVyf/img01.jpg'
}






