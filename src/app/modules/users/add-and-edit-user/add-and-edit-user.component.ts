import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import  Swal  from 'sweetalert2'

import { UserServiceService } from '../../../services/apiService/user-service.service'
import { LocalStorageService } from '../../../services/system/local-storage.service'
import { SpecialiteService } from '../../../services/apiService/specialite.service'
import { TypeUserService } from '../../../services/apiService/type-user.service'
import { KardexServiceService } from '../../../services/apiService/kardex-service.service'
  

@Component({
  selector: 'app-add-and-edit-user',
  templateUrl: './add-and-edit-user.component.html',
  styleUrls: ['./add-and-edit-user.component.css']
})
export class AddAndEditUSerComponent implements OnInit {
  public FormSaveAlumno:FormGroup;
  public specialites;
  public tipoUser;
  public identity;
  constructor(
    private _userService:UserServiceService,
    private _typeOfUsersService:TypeUserService,
    private _localStorage:LocalStorageService,
    private _specialiteService:SpecialiteService,
    private _kardexService:KardexServiceService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    
   }

  ngOnInit() {
    this.identity=this._localStorage.getIdentity();
    this.getSpecialites()
    this.FormSaveAlumno=new FormGroup({
      name:new FormControl('',[Validators.required]),
      surnameP:new FormControl('',[Validators.required]),
      surnameM:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      specialite:new FormControl('')
    }); 
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
      this.FormSaveAlumno.value.typeOfUsers = tipoUser;
      this._typeOfUsersService.getTypeUSer(tipoUser).subscribe(
        (response:any)=>{          
          this.tipoUser=response.getType.name;
          this._userService.saveAlumno(this.FormSaveAlumno.value).subscribe(
            (response:any)=>{              
              if(this.tipoUser=='Alumno')
              {
                this._kardexService.saveKardex(response.userSave._id).subscribe(
                  (response:any)=>{
                    Swal.fire({
                      icon: 'success',
                      title: 'Exito!!',
                      text: 'Usuario Registrado',
                      timer: 2000,
                    }).then(()=>{ 
                      this._router.navigate(['/portal-ISIMA/Dashboard/User/',tipoUser]);            
                      });
                  },error=>{
                    console.log(error);
                  }
                )
              }
              else
              {
                Swal.fire({
                  icon: 'success',
                  title: 'Exito!!',
                  text: 'Usuario Registrado',
                  timer: 2000,
                }).then(()=>{ 
                  this._router.navigate(['/portal-ISIMA/Dashboard/User/',tipoUser]);            
                  });
              }
            },error=>{
              console.log(error)
            }
          );
        },error=>{
          console.log(error)
        }
      );      
    })
    
  }
  regresar()
  {
    window.history.back();
  }

}
