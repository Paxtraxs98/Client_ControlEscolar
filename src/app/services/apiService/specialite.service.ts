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

  saveSpecialite(data)
  {
    let params=JSON.stringify(data);
    return this._http.post(this.url+'saveSpecialite',params).pipe(map(res=>res));
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
  updateSpecialite(idSpecialite,update)
  {
    let params=JSON.stringify(update);
    return this._http.put(this.url+'updateSpecialite/'+idSpecialite,params).pipe(map(res=>res));
  }
}
