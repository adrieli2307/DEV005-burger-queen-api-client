import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent {
  // Creación de geters (*averiguar)
   get name (){
    return this.formAddUser.get('name') as FormControl;
   }
   get email (){
    return this.formAddUser.get('email') as FormControl;
   }
   get password (){
    return this.formAddUser.get('password') as FormControl;
   }
   get cargo (){
    return this.formAddUser.get('cargo') as FormControl;
   }
  // Creación de grupo de formulario 
  formAddUser = new FormGroup ({
    'name': new FormControl ('', Validators.required),
    'email': new FormControl ('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required),
    'cargo': new FormControl('',Validators.required)
  })
  // Funcion al momento de hacer click
  process(){
    console.log(this.formAddUser.value);
    
  }

  /*name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);*/

}
