import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OptionsComponent } from './options/options.component';
import { MaterialModule } from '../../material/material.module'

@NgModule({
  declarations: [ToolbarComponent, OptionsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent,
    OptionsComponent
  ]
})
export class SharedModule { }
