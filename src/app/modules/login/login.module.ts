import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../../material/material.module';
import { PageLoginComponent } from './page-login/page-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [PageLoginComponent, ChangePasswordComponent],
  imports: [
    CommonModule ,
    LoginRoutingModule,
    MaterialModule   ,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
