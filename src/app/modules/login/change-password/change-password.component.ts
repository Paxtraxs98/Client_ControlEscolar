import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

import { LocalStorageService } from '../../../services/system/local-storage.service'
import { UserServiceService } from '../../../services/apiService/user-service.service'
import Swal from 'sweetalert2'



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public identity;
  FormPassword:FormGroup;

  constructor(
    private _localStorage:LocalStorageService,
    private _userService:UserServiceService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this.identity =this._localStorage.getIdentity()
    this.FormPassword = new FormGroup ({
        password:new FormControl('',[Validators.required, Validators.minLength(8)]),
        confirmPassword:new FormControl('',[Validators.required, Validators.minLength(8)])
      }
    )
  }
  onChangePassword()
  {
    this._route.params.forEach((params)=>{
      let idUser = params['idUser']      
      if(this.FormPassword.value.password == this.FormPassword.value.confirmPassword)
      {
        this.FormPassword.value.statusInPage="true";
        this._userService.updateUSer(idUser,this.FormPassword.value).subscribe(
          (response:any)=>{            
            Swal.fire({
              icon: 'success',
              title: 'Confirmacion Exitosa',
              text: 'Contraseña Cambiada',
              timer: 2000,
            }).then(()=>{ 
              this._router.navigate(['portal-ISIMA/Dashboard']);                  
              });
          },error=>{
            Swal.fire({
              icon: 'error',
              title: 'Ooops!!',
              text: error.error.message,
              timer: 2000,
            });
          }
        );
      }
      else
      {
        Swal.fire({
          icon: 'error',
          title: 'Ooops!!',
          text: "Las Contraseñas no coinciden",
          timer: 2000,
        });
      }
    })    
  }

}
