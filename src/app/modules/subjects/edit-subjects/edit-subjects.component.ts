import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import  Swal  from 'sweetalert2'

import { SpecialiteService } from '../../../services/apiService/specialite.service'
import { SubjectsServiceService } from '../../../services/apiService/subjects-service.service'

@Component({
  selector: 'app-edit-subjects',
  templateUrl: '../add-subjects/add-subjects.component.html',
  styleUrls: ['../add-subjects/add-subjects.component.css']
})
export class EditSubjectsComponent implements OnInit {
  public FormSubject:FormGroup;
  public specialites;
  public isEdit;
  constructor(
    private _specialiteService:SpecialiteService,
    private _subjectService:SubjectsServiceService,
    private _route: ActivatedRoute,
    private _router:Router,
  ) {
    this.isEdit=true;
   }

  ngOnInit() {
    this.getSpecialites();
    this.FormSubject=new FormGroup({
      name:new FormControl('',[Validators.required]),      
      grade:new FormControl(''),
      specialite:new FormControl(''),
    }); 
    this.getSubject();
  }
  getSpecialites()
  {
    this._specialiteService.getSpecialite().subscribe(
      (response:any)=>{        
        this.specialites=response.specialites
      },error=>{
        console.log(error)
      }
    )
  }
  getSubject()
  {
    this._route.params.forEach((params)=>{
      let idSubject=params['idSubject']
      this._subjectService.getSubjects(idSubject).subscribe(
        (response:any)=>{          
          this.FormSubject=new FormGroup({
            name:new FormControl(response.subjectSearch.name,[Validators.required]),      
            grade:new FormControl(response.subjectSearch.grade),
            specialite:new FormControl(response.subjectSearch.specialite._id),
          });
        },error=>{  
          console.log(error)
        }
      )
    })
  }
  onSubmit()
  {
    this._route.params.forEach((params)=>{
      var idSubject = params['idSubject'];
      this._subjectService.updateSubject(idSubject,this.FormSubject.value).subscribe(
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
    })
  }

}
