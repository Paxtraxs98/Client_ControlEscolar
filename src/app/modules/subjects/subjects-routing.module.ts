import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetSubjectsComponent } from './get-subjects/get-subjects.component';
import { AddSubjectsComponent } from './add-subjects/add-subjects.component';
import { EditSubjectsComponent } from './edit-subjects/edit-subjects.component';

const routes: Routes = [
  {
    path :'',
    component : GetSubjectsComponent
  } ,
  {
    path :'AddSubject',
    component : AddSubjectsComponent
  },
  {
    path :'EditSubject/:idSubject',
    component : EditSubjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsRoutingModule { }
