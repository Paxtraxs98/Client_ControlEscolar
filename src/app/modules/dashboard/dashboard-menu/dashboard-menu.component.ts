import { Component, OnInit } from '@angular/core';
import { TypeUserService } from '../../../services/apiService/type-user.service'

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
  public alumno;
  public profesor;
  public administrativo;

  constructor(
    private _typeService:TypeUserService
  ) {
    
   }

  ngOnInit() {
    this._typeService.getTypeUSer().subscribe(
      (response:any)=>{           
        this.alumno=response.getType[2]._id
        this.profesor=response.getType[0]._id
        this.administrativo=response.getType[1]._id
      },error=>{
        console.log(error)
      }
    );
  }

}
