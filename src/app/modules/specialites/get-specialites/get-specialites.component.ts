import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { LocalStorageService } from '../../../services/system/local-storage.service'
import { SpecialiteService } from '../../../services/apiService/specialite.service'

@Component({
  selector: 'app-get-specialites',
  templateUrl: './get-specialites.component.html',
  styleUrls: ['./get-specialites.component.css']
})
export class GetSpecialitesComponent implements OnInit {
  public identity;
  public dataSource;
  public status={};
  displayedColumns: string[] = ['nombre', 'status', 'action'];  
  constructor(
    private _localStorageService:LocalStorageService,
    private _specialiteService:SpecialiteService
  ) { }

  ngOnInit() {
    this.identity=this._localStorageService.getIdentity()
    this.getSpecialites();
  }
  getSpecialites()
  {
    this._specialiteService.getSpecialite().subscribe(
      (response:any)=>{         
        this.dataSource = new MatTableDataSource(response.specialites);
      },error=>{
        console.log(error) 
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  bajaSpecialite(idSubject)
  {  
    this.status={status:"false"};    
    this._specialiteService.updateSpecialite(idSubject,this.status).subscribe(
      (response:any)=>{        
        this.getSpecialites()
      },error=>{
        console.log(error)
      }
    );    
  }
  altaSpecialite(idSubject)
  {
    this.status={status:"true"};    
    this._specialiteService.updateSpecialite(idSubject,this.status).subscribe(
      (response:any)=>{        
        this.getSpecialites();
      },error=>{
        console.log(error)
      }
    );
  }
}
