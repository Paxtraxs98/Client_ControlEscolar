import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { SpecialiteService } from '../../../services/apiService/specialite.service'
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-addpecialites',
  templateUrl: './addpecialites.component.html',
  styleUrls: ['./addpecialites.component.css']
})
export class AddpecialitesComponent implements OnInit {
  public FormSpecialite:FormGroup;
  constructor(
    private _specialiteService:SpecialiteService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit() {
    this.FormSpecialite=new FormGroup({
      name:new FormControl('',[Validators.required])      
    }); 
  }
  onSubmit()
  {
    console.log(this.FormSpecialite.value);
    this._specialiteService.saveSpecialite(this.FormSpecialite.value).subscribe(
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
    );
  }
  regresar()
  {
    this._router.navigate(['/portal-ISIMA/Dashboard/Specialites']);            
  }
}
