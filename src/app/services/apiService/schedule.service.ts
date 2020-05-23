import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from '../../services/system/global'
import { map } from 'rxjs/operators'

import { LocalStorageService } from  '../system/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

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
  addSchedule(data)
  {
    let params = JSON.stringify(data);
    return this._http.post(this.url+'saveSchedule',params).pipe(map(res=>res));
  }
  getSchedule(idSchedule=null)
  {
    if(idSchedule)
    {
      return this._http.get(this.url+'getSchedules/'+idSchedule).pipe(map(res=>res))
    }
    else
    {
      return this._http.get(this.url+'getSchedules').pipe(map(res=>res))
    }    
  }
  updateSpchedule(idSchedule,update)
  {
    let params=JSON.stringify(update);
    return this._http.put(this.url+'updateSchedule/'+idSchedule,params).pipe(map(res=>res));
  }
  deleteSchedule(idSchedule){
    return this._http.delete(this.url+'deleteSchedule/'+idSchedule).pipe(map(res=>res))
  }
  deleteSchedules(){
    return this._http.delete(this.url+'deleteSchedules').pipe(map(res=>res))
  }
}
