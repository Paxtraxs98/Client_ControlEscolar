import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { LocalStorageService } from '../../../services/system/local-storage.service'
import { SubjectsServiceService } from '../../../services/apiService/subjects-service.service'

@Component({
  selector: 'app-get-subjects',
  templateUrl: './get-subjects.component.html',
  styleUrls: ['./get-subjects.component.css']
})
export class GetSubjectsComponent implements OnInit {
  public identity;
  public dataSource;
  public status={};
  displayedColumns: string[] = ['licenciatura','grade','nombre', 'status', 'action'];  
  constructor(
    private _localStorageService:LocalStorageService,
    private _subjectService:SubjectsServiceService
  ) { }

  ngOnInit() {
    this.identity=this._localStorageService.getIdentity()
    this.getSubjects()
  }

  getSubjects()
  {
    this._subjectService.getSubjects().subscribe(
      (response:any)=>{
        this.dataSource = new MatTableDataSource(response.subjectSearch);
      },error=>{
        console.log(error);
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  bajaSubject(idSubject)
  {  
    this.status={status:"false"};    
    this._subjectService.updateSubject(idSubject,this.status).subscribe(
      (response:any)=>{        
        this.getSubjects();
      },error=>{
        console.log(error)
      }
    );    
  }
  altaSubject(idSubject)
  {
    this.status={status:"true"};    
    this._subjectService.updateSubject(idSubject,this.status).subscribe(
      (response:any)=>{        
        this.getSubjects();
      },error=>{
        console.log(error)
      }
    );
  }

}
