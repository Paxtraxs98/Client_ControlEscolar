import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import  Swal  from 'sweetalert2'

import { UserServiceService } from '../../../services/apiService/user-service.service'
import { LocalStorageService } from '../../../services/system/local-storage.service'
import { SpecialiteService } from '../../../services/apiService/specialite.service'


@Component({
  selector: 'app-edituser',
  templateUrl: '../add-and-edit-user/add-and-edit-user.component.html',
  styleUrls: ['../add-and-edit-user/add-and-edit-user.component.css']
})
export class EdituserComponent implements OnInit {
  public FormSaveAlumno:FormGroup;
  public datosAlumno;
  public isEdit;
  public selected;
  public specialites;
  public identity ;

  constructor(
    private _userService:UserServiceService,
    private _localStorage:LocalStorageService,
    private _specialiteService:SpecialiteService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.isEdit=true;
  }

  ngOnInit() {    
    this.identity=this._localStorage.getIdentity()
    this.getSpecialites();
    this.FormSaveAlumno=new FormGroup({
      name:new FormControl('',[Validators.required]),
      surnameP:new FormControl('',[Validators.required]),
      surnameM:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      specialite:new FormControl(''),
      password:new FormControl('',[Validators.required]),
      statusInPage:new FormControl('',[Validators.required]),
      statusInSchool:new FormControl('',[Validators.required]),            
    });  
    this.getUser();  
  }
  getUser()
  {
    this._route.params.forEach((params)=>{
      let alumno = params['idUser']; 
      this._userService.getDataUser(alumno).subscribe(
        (response:any)=>{          
          this.datosAlumno=response.userSearch;
          this.FormSaveAlumno=new FormGroup({
            name:new FormControl(this.datosAlumno.name,[Validators.required]),
            surnameP:new FormControl(this.datosAlumno.surnameP,[Validators.required]),
            surnameM:new FormControl(this.datosAlumno.surnameM,[Validators.required]),
            address:new FormControl(this.datosAlumno.address,[Validators.required]),
            phone:new FormControl(this.datosAlumno.phone,[Validators.required]),
            email:new FormControl(this.datosAlumno.email,[Validators.required,Validators.email]),
            specialite:new FormControl(this.datosAlumno.specialite._id),
            password:new FormControl(''),            
          });           
        },error=>{
          console.log(error)
        }
      );
    })
  }
  getSpecialites()
  {
    this._specialiteService.getSpecialite().subscribe(
      (response:any)=>{
        this.specialites=response.specialites;
      },error=>{
        console.log(error);
      }
    )
  }
  onSaveUser()
  {
    this._route.params.forEach((params)=>{
      let tipoUser=params['idTypeUser']; 
      let idUser=params['idUser']; 
      this._userService.updateUSer(idUser,this.FormSaveAlumno.value).subscribe(
        (response:any)=>{
          Swal.fire({
            icon: 'success',
            title: 'Exito!!',
            text: response.message,
            timer: 2000,
          }).then(()=>{ 
            this._router.navigate(['/portal-ISIMA/Dashboard/User/',tipoUser]);            
            });       
        },error=>{
          console.log(error)
        }
      );
    })
  }
  regresar()
  {
    this._route.params.forEach((params)=>{
      let tipoUser=params['idTypeUser']; 
      this._router.navigate(['/portal-ISIMA/Dashboard/User/',tipoUser]);            
    })
  }
}
