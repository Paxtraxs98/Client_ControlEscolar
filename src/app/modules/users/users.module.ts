import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'


import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddAndEditUSerComponent } from './add-and-edit-user/add-and-edit-user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserDetallComponent } from './user-detall/user-detall.component';
import { ChangeImageProfileComponent } from './change-image-profile/change-image-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [GetUsersComponent, AddAndEditUSerComponent, EdituserComponent, UserDetallComponent, ChangeImageProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,    
    SharedModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
