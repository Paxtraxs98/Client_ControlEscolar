import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetUsersComponent } from './get-users/get-users.component';
import { AddAndEditUSerComponent } from './add-and-edit-user/add-and-edit-user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserDetallComponent } from './user-detall/user-detall.component';
import { ChangeImageProfileComponent } from './change-image-profile/change-image-profile.component';


const routes: Routes = [
  {
    path : '',
    component: GetUsersComponent
  },
  {
    path : 'Agregar',
    component: AddAndEditUSerComponent
  },
  {
    path : 'Editar/:idUser',
    component: EdituserComponent
  },
  {
    path : 'UserDetall/:idUser',
    component: UserDetallComponent
  },
  {
    path : 'Cambiar-Imagen/:idUser',
    component: ChangeImageProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
