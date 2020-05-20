import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module'
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http'
import { TokenInterceptorService } from '../../services/system/token-interceptor.service'

import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';
import { AddAndEditUSerComponent } from './add-and-edit-user/add-and-edit-user.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserDetallComponent } from './user-detall/user-detall.component';
import { ChangeImageProfileComponent } from './change-image-profile/change-image-profile.component';


@NgModule({
  declarations: [GetUsersComponent, AddAndEditUSerComponent, EdituserComponent, UserDetallComponent, ChangeImageProfileComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DashboardModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
})
export class UsersModule { }
