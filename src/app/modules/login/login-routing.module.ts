import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePrincipalComponent } from '../home/page-principal/page-principal.component'
import { FormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path : '',
    component : PageLoginComponent
  },
  {
    path : 'Change-Password/:idUser',
    component : ChangePasswordComponent
  },
  {
    path : 'Dashboard',
    loadChildren : '../dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

