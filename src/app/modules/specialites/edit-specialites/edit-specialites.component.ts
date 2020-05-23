import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { SpecialiteService } from '../../../services/apiService/specialite.service'
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-edit-specialites',
  templateUrl: '../addpecialites/addpecialites.component.html',
  styleUrls: ['../addpecialites/addpecialites.component.css']
})
export class EditSpecialitesComponent implements OnInit {
  public FormSpecialite:FormGroup;
  public isEdit

  constructor(
    private _specialiteService:SpecialiteService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.isEdit=true;
  }

  ngOnInit() {
    this.FormSpecialite=new FormGroup({
      name:new FormControl('',[Validators.required])      
    });     
    this.getSpecialite();
  }
  getSpecialite()
  {
    this._route.params.forEach((params)=>{
      let idSpecialite=params['idSpecialite']
      this._specialiteService.getSpecialite(idSpecialite).subscribe(
        (response:any)=>{
          this.FormSpecialite=new FormGroup({
            name:new FormControl(response.specialites.name,[Validators.required])      
          });               
        },error=>{
          console.log(error)
        }
      )
    })
  }
  onSubmit(){
    this._route.params.forEach((params)=>{
      let idSpecialite=params['idSpecialite'];
      this._specialiteService.updateSpecialite(idSpecialite,this.FormSpecialite.value).subscribe(
        (response:any)=>{
          Swal.fire({
            icon: 'success',
            title: 'Exito!!',
            text: response.message,
            timer: 2000,
          }).then(()=>{ 
            this._router.navigate(['/portal-ISIMA/Dashboard/Specialites']);            
            });
        },error=>{
          console.log(error)
        }
      )
    })
  }
  regresar()
  {
    this._router.navigate(['/portal-ISIMA/Dashboard/Specialites']);            
  }

}
