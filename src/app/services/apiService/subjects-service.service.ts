import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from '../../services/system/global'
import { map } from 'rxjs/operators'

import { LocalStorageService } from  '../system/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectsServiceService {

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

  
  addSubject(dataSubject)    
  {
    let params = JSON.stringify(dataSubject);
    return this._http.post(this.url+'saveSubject',params).pipe(map(res => res));
  }
  getSubjects(idSubject=null)
  {
    if(!idSubject)
    {
      return this._http.get(this.url+'getSubjects').pipe(map(res => res));
    } 
    else
    {
      return this._http.get(this.url+'getSubjects/'+idSubject).pipe(map(res => res));
    }
  }
  updateSubject(idSubject,updateSubject)
  {
    let params = JSON.stringify(updateSubject);
    return this._http.put(this.url+'updateSubject/'+idSubject,params).pipe(map(res => res));
  }
  
}
