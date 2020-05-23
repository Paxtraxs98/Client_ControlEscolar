import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetSchedulesComponent } from './get-schedules/get-schedules.component';
import { AddSchedulesComponent } from './add-schedules/add-schedules.component';
import { EditSchedulesComponent } from './edit-schedules/edit-schedules.component';

const routes: Routes = [
  {
    path : '',
    component : GetSchedulesComponent
  },
  {
    path : 'AddSchedule',
    component : AddSchedulesComponent
  },
  {
    path : 'EditSchedule/:idSchedule',
    component : EditSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
