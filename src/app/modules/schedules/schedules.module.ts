import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module'
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http'

import { SchedulesRoutingModule } from './schedules-routing.module';
import { GetSchedulesComponent } from './get-schedules/get-schedules.component';
import { AddSchedulesComponent } from './add-schedules/add-schedules.component';
import { EditSchedulesComponent } from './edit-schedules/edit-schedules.component';


@NgModule({
  declarations: [GetSchedulesComponent, AddSchedulesComponent, EditSchedulesComponent],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    DashboardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SchedulesModule { }
