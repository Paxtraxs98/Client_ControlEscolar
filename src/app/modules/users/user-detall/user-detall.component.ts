import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router'
import {MatTableDataSource} from '@angular/material/table';

import { UserServiceService } from '../../../services/apiService/user-service.service'
import { KardexServiceService } from '../../../services/apiService/kardex-service.service'
import { TypeUserService } from '../../../services/apiService/type-user.service'
import { global } from '../../../services/system/global'

@Component({
  selector: 'app-user-detall',
  templateUrl: './user-detall.component.html',
  styleUrls: ['./user-detall.component.css']
})
export class UserDetallComponent implements OnInit {
  public dataUser;  
  public dataSource;  
  public url;
  displayedColumns: string[] = ['nombre','semestre', 'calificacion','action'];  

  
  constructor(
    private _userService:UserServiceService,
    private _kardexService:KardexServiceService,
    private _typeUserService:TypeUserService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.url=global.url;
    
   }

  ngOnInit() {
    this.getAlumno();    
    this.getKardex();
  }
    getAlumno()
    {
      this._route.params.forEach((params)=>{
        let idUser=params['idUser'];        
        this._userService.getDataUser(idUser).subscribe(
          (response:any)=>{            
            console.log(response)
            this.dataUser = response.userSearch;
          },error=>{
            console.log(error)
          });

      });
    }
    getKardex()
    {
      this._route.params.forEach((params)=>{
        let idUser=params['idUser'];        
        let idTipo=params['idTypeUser']
        this._typeUserService.getTypeUSer(idTipo).subscribe(
          (response : any)=>{
            if(response.getType.name=='Alumno')
            {
              this._kardexService.getKardex(idUser).subscribe(
                (response:any)=>{   
                  this.dataSource = new MatTableDataSource(response.kardex[0].history);                                   
                },error=>{
                  console.log(error)
                });
            }            
          },error=>{
            console.log(error)
          }
        );
      
      });
    }

}
