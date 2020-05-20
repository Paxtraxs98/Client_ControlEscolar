import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from './global'

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  public url;
  public identity;
  public token; 

  constructor(
    private _http:HttpClient
  ) { 
    this.url=global.url
  }

  getIdentity()
  {
   let identity = JSON.parse(localStorage.getItem('identity')) ;
   (identity != 'undefined') ? this.identity = identity : this.identity = null;
   return this.identity;
  }
  getToken()
  {
    let token = JSON.parse(localStorage.getItem('token'));
    (token != 'undefined') ? this.token = token : this.token = null;
    return this.token;
  }
  
  
}
