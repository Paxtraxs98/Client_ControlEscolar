import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module'
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http'


import { SharedModule}from '../shared/shared.module'
import { SubjectsRoutingModule } from './subjects-routing.module';
import { GetSubjectsComponent } from './get-subjects/get-subjects.component';
import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditSubjectsComponent } from './edit-subjects/edit-subjects.component';


@NgModule({
  declarations: [GetSubjectsComponent, AddSubjectsComponent, EditSubjectsComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SubjectsModule { }
