import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from '../../services/system/global'
import { map } from 'rxjs/operators'

import { LocalStorageService } from  '../system/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {
  
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

  getTypeUSer(idTipo=null)
  {
    if(idTipo==null)
    {
      return this._http.get(this.url+'getType').pipe(map(res => res));
    }
    else
    {
      return this._http.get(this.url+'getType/'+idTipo).pipe(map(res => res));
    }
    
  }
}
