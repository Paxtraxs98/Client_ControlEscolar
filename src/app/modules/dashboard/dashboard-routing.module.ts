import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { UsersModule } from '../users/users.module'


const routes: Routes = [
  {
    path :'',
    component : DashboardViewComponent
  },  
  {
    path : 'User/:idTypeUser',
    loadChildren : '../users/users.module#UsersModule'
  },
  {
    path : 'Subjects',
    loadChildren : '../subjects/subjects.module#SubjectsModule'
  },
  {
    path : 'Specialites',
    loadChildren : '../specialites/specialites.module#SpecialitesModule'
  },
  {
    path:'Schedules',
    loadChildren : '../schedules/schedules.module#SchedulesModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
