import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http'

import { SharedModule}from '../shared/shared.module'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule,
    SharedModule
  ]
})
export class DashboardModule { }
