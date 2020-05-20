import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router'

import { UserServiceService } from '../../../services/apiService/user-service.service';
import { global } from '../../../services/system/global'
import { LocalStorageService } from '../../../services/system/local-storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {
  public url;
  public identity;
  public tipo

  constructor(
    private _userService:UserServiceService,
    private _localStorage:LocalStorageService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.url = global.url    
  }

  ngOnInit() {
    this.identity = this._localStorage.getIdentity();    
  }
  logout()
  {
      localStorage.removeItem('identity');
      localStorage.removeItem('token');
      localStorage.clear();                   
      Swal.fire({
        icon: 'success',
        title: 'Sesion Cerrada',        
        timer: 2000,
      }).then(()=>{ 
        this._router.navigate(['portal-ISIMA']); 
        });
  }

}
