import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout' 


import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatListModule} from '@angular/material/list'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 

const materialAngular = [
  FlexLayoutModule,
  MatSidenavModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatDividerModule,
  MatCardModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatSelectModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTreeModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialAngular   
  ],
  exports:[
    materialAngular
  ]
})
export class MaterialModule { }
