import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import  Swal  from 'sweetalert2'


import { SpecialiteService } from '../../../services/apiService/specialite.service'
import { SubjectsServiceService } from '../../../services/apiService/subjects-service.service'
@Component({
  selector: 'app-add-subjects',
  templateUrl: './add-subjects.component.html',
  styleUrls: ['./add-subjects.component.css']
})
export class AddSubjectsComponent implements OnInit {
  public FormSubject:FormGroup;
  public specialites

  constructor(
    private _specialiteService:SpecialiteService,
    private _subjectService:SubjectsServiceService,
    private _router:Router
  ) { 

  }

  ngOnInit() {
    this.FormSubject=new FormGroup({
      name:new FormControl('',[Validators.required]),      
      grade:new FormControl(''),
      specialite:new FormControl(''),
    }); 
    this.getSpecialites()
  }
  getSpecialites()
  {
    this._specialiteService.getSpecialite().subscribe(
      (response:any)=>{
        this.specialites=response.specialites;        
      },error=>{
        console.log(error)
      }
    )
  }
  onSubmit()
  {
    console.log(this.FormSubject.value)
    this._subjectService.addSubject(this.FormSubject.value).subscribe(
      (response:any)=>{
        Swal.fire({
          icon: 'success',
          title: 'Exito!!',
          text: response.message,
          timer: 2000,
        }).then(()=>{ 
          this._router.navigate(['/portal-ISIMA/Dashboard/Subjects']);            
          });
      },error=>{
        console.log(error)
      }
    )
  }

}
