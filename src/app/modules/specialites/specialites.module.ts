import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http'


import { SharedModule}from '../shared/shared.module'
import { SpecialitesRoutingModule } from './specialites-routing.module';
import { GetSpecialitesComponent } from './get-specialites/get-specialites.component';
import { AddpecialitesComponent } from './addpecialites/addpecialites.component';
import { EditSpecialitesComponent } from './edit-specialites/edit-specialites.component';


@NgModule({
  declarations: [GetSpecialitesComponent, AddpecialitesComponent, EditSpecialitesComponent],
  imports: [
    CommonModule,
    SpecialitesRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SpecialitesModule { }
