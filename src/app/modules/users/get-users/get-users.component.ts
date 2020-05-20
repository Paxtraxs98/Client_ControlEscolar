import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

import { UserServiceService } from '../../../services/apiService/user-service.service'
import { LocalStorageService } from '../../../services/system/local-storage.service';
import { TypeUserService } from '../../../services/apiService/type-user.service';


@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {
  public users;
  public dataSource;
  public identity;
  public tipo;
  public status={};
  displayedColumns: string[] = ['nombre', 'telefono', 'email','statusPage', 'statusSchool','action'];  

  constructor(
    private _route:ActivatedRoute,    
    private _userService:UserServiceService,
    private _typeOfService:TypeUserService,
    private _localStorage:LocalStorageService
  ) { }

  ngOnInit() {
    this.identity=this._localStorage.getIdentity();    
    this.getStudents()
    this.getType()
  }
  getStudents()
  {
    this._route.params.forEach((params)=>{      
      let tipoUser=params['idTypeUser'];      
      this._userService.getUserforType(tipoUser).subscribe(
        (response:any)=>{          
          this.users=response;
          this.dataSource = new MatTableDataSource(this.users);
        },error=>{
          console.log(error)
        }
      );
    })
  }
  getType()
  {
    this._route.params.forEach((params)=>{
      let idType=params['idTypeUser'];
      this._typeOfService.getTypeUSer(idType).subscribe(
        (response:any)=>{
          this.tipo=response.getType.name          
        },error=>{
          console.log(error);
        }
      );
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  bajaAlumnoSchool(idAlumno)
  {  
    this.status={statusInSchool:"false",password:""};    
    console.log(this.status)
    this._userService.updateUSer(idAlumno,this.status).subscribe(
      (response:any)=>{        
        this.getStudents();
      },error=>{
        console.log(error)
      }
    );    
  }
  altaAlumnoSchool(idAlumno)
  {
    this.status={statusInSchool:"true",password:""};    
    console.log(this.status)    
    this._userService.updateUSer(idAlumno,this.status).subscribe(
      (response:any)=>{        
        this.getStudents();
      },error=>{
        console.log(error)
      }
    );
  }
  bajaAlumnoPage(idAlumno)
  {  
    this.status={statusInPage:"false",password:""};    
    this._userService.updateUSer(idAlumno,this.status).subscribe(
      (response:any)=>{        
        this.getStudents();
      },error=>{
        console.log(error)
      }
    );    
  }
  altaAlumnoPage(idAlumno)
  {
    this.status={statusInPage:"true",password:""};    
    this._userService.updateUSer(idAlumno,this.status).subscribe(
      (response:any)=>{        
        this.getStudents();
      },error=>{
        console.log(error)
      }
    );
  }
}
