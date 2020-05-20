import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from '../../services/system/global'
import { map } from 'rxjs/operators'

import { LocalStorageService } from  '../system/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class KardexServiceService {

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
  saveKardex(idUser)
  {
    return this._http.post(this.url+'saveKardex/'+idUser,[]).pipe(map(res => res));
  }
  getKardex(idUser)
  {
    return this._http.get(this.url+'getKardex/'+idUser).pipe(map(res => res));
  }

}
