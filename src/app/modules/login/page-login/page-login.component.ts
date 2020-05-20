import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../../services/apiService/user-service.service'
import { LocalStorageService } from '../../../services/system/local-storage.service';
import { Router,ActivatedRoute } from '@angular/router'
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  
  public servicios = [];
  FormLogin:FormGroup;
  public token;
  public identity;

  constructor(
    private _userService:UserServiceService,
    private _localStorage:LocalStorageService,
    private _route:ActivatedRoute,
    private _router : Router,
  ) { 
    this.servicios=[
      {title:"COMUNIDAD",contenido:'¡Únete a la conversación! Aclara tus dudas y comenta con otros usuarios todas tus inquietudes acerca de la vida universitaria. ',link:'Entra aqui',posicion:'1'},
      
      {title:"SERVICIOS EN LINEA",contenido:'Aquí podrás obtener información valiosa como: tu tira de materias, avance porcentual de tu carrera, etc. ',link:'Ingresa aqui',posicion:'2'},
      {title:"AYUDA",contenido:'Escríbenos para que un asesor especializado te ofrezca la información que requieres así como más posibilidades para realizar tus estudios. ',link:'Contactanos',posicion:'3'}
    ]    
  }

  ngOnInit() 
  {
    this.identity = this._localStorage.getIdentity();
    this.FormLogin=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    }); 
  }
  regresar()
  {
    window.history.back();
  }
  onSubmit()
  {      
    
      this._userService.login(this.FormLogin.value).subscribe(
        (response:any) =>{
          localStorage.setItem('identity',JSON.stringify(response.user))
          if(response.user._id)
          {
            this._userService.login(this.FormLogin.value,true).subscribe(
              (response:any)=>
              {
                localStorage.setItem('token',JSON.stringify(response.token))               
                if(response.user.statusInPage == true)
                {                  
                  localStorage.setItem('token',JSON.stringify(response.token))               
                  Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido',
                    text: 'Iniciaste sesion correctamente!',
                    timer: 2000,
                  }).then(()=>{ 
                    this._router.navigate(['portal-ISIMA/Dashboard']);                  
                    
                    });
                }
                else
                {
                  this._router.navigate(['portal-ISIMA/Change-Password/',response.user._id]);                                                      
                }
              },error=>{
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops!!',
                  text: error.error.messagee,
                  timer: 2000,
                });                
              })            
          }
        },
        error=>{          
          Swal.fire({
            icon: 'error',
            title: 'Ooops!!',
            text: error.error.message,
            timer: 2000,
          }); 
        }
      );
  }

}
