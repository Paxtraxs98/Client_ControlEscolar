import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../../../services/apiService/user-service.service';
import { global } from '../../../services/system/global'
import { LocalStorageService } from '../../../services/system/local-storage.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']  
})
export class DashboardViewComponent implements OnInit {
  public profile;
  public url;
  public identity;
  public token;

  constructor(
    private _userService:UserServiceService,
    private _localStorage:LocalStorageService    
  ) { 
    this.url = global.url    
  }

  ngOnInit() {
    this.identity = this._localStorage.getIdentity();    
  }


}
