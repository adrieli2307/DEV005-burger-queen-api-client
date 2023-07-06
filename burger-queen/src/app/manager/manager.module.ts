import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerMenuComponent } from './manager-menu/manager-menu.component';
import { ManagerStaffComponent } from './manager-staff/manager-staff.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalAddUserComponent } from './manager-staff/modal-add-user/modal-add-user.component';
import { ReactiveFormsModule} from '@angular/forms'
import { ButtonsComponent } from '../buttons/buttons.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'staff',
    pathMatch: 'full'

  },
  {
    path: 'staff',
    component: ManagerStaffComponent,

  },
  {
    path: 'menu',
    component: ManagerMenuComponent
  }
]

@NgModule({
  declarations: [
    ManagerMenuComponent,
    ManagerStaffComponent,
    ModalAddUserComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    
  ],
  exports: [RouterModule]
})
export class ManagerModule { }
