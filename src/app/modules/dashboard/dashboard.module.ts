import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http'
import { TokenInterceptorService } from '../../services/system/token-interceptor.service'


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { MaterialModule } from '../../material/material.module';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';

@NgModule({
  declarations: [DashboardViewComponent, DashboardNavComponent, DashboardMenuComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[
    DashboardNavComponent,
    DashboardMenuComponent
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
})
export class DashboardModule { }
