import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PlanetelesComponent } from './planeteles/planeteles.component';
import { OfertaEducativaComponent } from './oferta-educativa/oferta-educativa.component';

const routes: Routes = [
  {
    path : '',
    component : PagePrincipalComponent
  },
  {
    path : 'Contactos',
    component : ContactosComponent
  },
  {
    path : 'Planteles',
    component : PlanetelesComponent
  },
  {
    path : 'Oferta-Educativa',
    component :  OfertaEducativaComponent
  },  
  {
    path : 'Oferta-Educativa',
    component :  OfertaEducativaComponent
  },
  {
    path : 'portal-ISIMA',
    loadChildren: '../login/login.module#LoginModule'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
