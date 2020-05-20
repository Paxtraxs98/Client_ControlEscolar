import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
// import { LoginComponent } from './login/login.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PlanetelesComponent } from './planeteles/planeteles.component';
import { OfertaEducativaComponent } from './oferta-educativa/oferta-educativa.component';


@NgModule({
  declarations: [
    // LoginComponent, 
    PagePrincipalComponent,   
    FooterComponent,
    HeaderComponent,
    ContactosComponent,
    PlanetelesComponent,
    OfertaEducativaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
