import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from '../../services/system/global'
import { map } from 'rxjs/operators'

import { LocalStorageService } from  '../system/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  public url;
  public identity;
  public token;
  constructor(
    private _http:HttpClient,
    private _localStorage:LocalStorageService
  ) { 
    this.url = global.url;
    this.identity =this._localStorage.getIdentity();
  }

  getSpecialite(idSpecialite = null)
  {
    if(idSpecialite==null)
    {
      return this._http.get(this.url+'getSpecialites').pipe(map(res => res));
    }
    else
    {
      return this._http.get(this.url+'getSpecialites/'+idSpecialite).pipe(map(res => res));
    }
    
  }
}
