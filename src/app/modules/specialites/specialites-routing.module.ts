import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetSpecialitesComponent } from './get-specialites/get-specialites.component';
import { AddpecialitesComponent } from './addpecialites/addpecialites.component';
import { EditSpecialitesComponent } from './edit-specialites/edit-specialites.component';

const routes: Routes = [
  {
    path:'',
    component:GetSpecialitesComponent
  },
  {
    path:'AddSpecialite',
    component:AddpecialitesComponent
  },
  {
    path:'EditSpecialite/:idSpecialite',
    component:EditSpecialitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialitesRoutingModule { }
