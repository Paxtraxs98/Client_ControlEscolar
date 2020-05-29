import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router'

import { LocalStorageService } from '../../../services/system/local-storage.service'
import { ScheduleService } from '../../../services/apiService/schedule.service'
import  Swal  from 'sweetalert2'


@Component({
  selector: 'app-get-schedules',
  templateUrl: './get-schedules.component.html',
  styleUrls: ['./get-schedules.component.css']
})
export class GetSchedulesComponent implements OnInit {

  public identity;
  public dataSource;
  public lng //tamaño de la datasource
  displayedColumns: string[] = ['materia','licenciatura','cuatrimestre', 'dias', 'horario','action'];  

  constructor(
    private _localStorageService:LocalStorageService,
    private _scheduleService:ScheduleService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.identity=this._localStorageService.getIdentity()
    this.getSchedules()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getSchedules()
  {
      this._scheduleService.getSchedule().subscribe(
        (response:any)=>{          
          this.dataSource = new MatTableDataSource(response.schedules);         
          this.lng = this.dataSource._data._value.length;          
        },error=>{
          console.log(error)
        }
      )
  }
  eliminar(idSchedule)
  {
    this._scheduleService.deleteSchedule(idSchedule).subscribe(
      (response:any)=>{
        Swal.fire({
          icon: 'success',
          title: 'Exito!!',
          text: response.message,
          timer: 2000,
        }).then(()=>{ 
          this.getSchedules()
          });
      },error=>{
        console.log(error)
      }
    );
  }
  eliminarTodos()
  {     
    Swal.fire({
      title: 'Esta Seguro?',
      text: "esta accion eliminara todos los horarios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._scheduleService.deleteSchedules().subscribe(
          (response:any)=>{
            Swal.fire({
              icon: 'success',
              title: 'Exito!!',
              text: response.message,
              timer: 2000,
            }).then(()=>{ 
              this.getSchedules()
              });
          },error=>{
            console.log(error)
          }
        ); 
      }
    })
  }
}
