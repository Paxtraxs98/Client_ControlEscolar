import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { ScheduleService } from '../../../services/apiService/schedule.service'
import { UserServiceService } from '../../../services/apiService/user-service.service'
import { SubjectsServiceService } from '../../../services/apiService/subjects-service.service'
import { SpecialiteService } from '../../../services/apiService/specialite.service'
import { TypeUserService } from '../../../services/apiService/type-user.service'
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-add-schedules',
  templateUrl: './add-schedules.component.html',
  styleUrls: ['./add-schedules.component.css']
})
export class AddSchedulesComponent implements OnInit {

  public FormSchedule:FormGroup;  
  public teachers;
  public subjects=[];
  public auxiliar

  constructor(
    private _scheduleService:ScheduleService,
    private _userService:UserServiceService,
    private _subjectService:SubjectsServiceService,    
    private _typeOfUsers:TypeUserService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this.FormSchedule=new FormGroup({
      subject:new FormControl(''),
      teacher:new FormControl(''),
      days:new FormControl('',[Validators.required]),
      schedule:new FormControl('',[Validators.required]),
      classroom:new FormControl('',[Validators.required])
    });     
    this.getSubjects();
    this.getTeachers();
  }  
  getSubjects(){
    this._subjectService.getSubjects().subscribe(
      (response:any)=>{
        // this.subjects=response.subjectSearch        
        this.auxiliar=response.subjectSearch;        
        for (const i in this.auxiliar) {                    
          if(this.auxiliar[i].status===true){            
            this.subjects.push(this.auxiliar[i]);                        
          }
        }        
      },error=>{
        console.log(error)
      }
    )
  }
  getTeachers(){
    this._typeOfUsers.getTypeUSer().subscribe(
      (response:any)=>{
        let tipos=response.getType
        for (var i = 0; i < tipos.length ; i++) {          
          if(tipos[i].name == 'Profesor')
          {
            this._userService.getUserforType(tipos[i]._id).subscribe(
              (response:any)=>{
                this.teachers=response;                
              },error=>{
                console.log(error)
              }       
            )
          }
        }        
      },error=>{
        console.log(error)
      }
    )
  }
  onSubmit()
  {
    this._scheduleService.addSchedule(this.FormSchedule.value).subscribe(
      (response:any)=>{
        Swal.fire({
          icon: 'success',
          title: 'Exito!!',
          text: response.message,
          timer: 2000,
        }).then(()=>{ 
          this._router.navigate(['/portal-ISIMA/Dashboard/Schedules']);            
          });
      },error=>{
        console.log(error)
      }
    )
  }
  regresar(){
    this._router.navigate(['/portal-ISIMA/Dashboard/Schedules']);           
  }

}

