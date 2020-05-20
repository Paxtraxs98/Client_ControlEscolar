import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { global } from '../../services/system/global'
import { map } from 'rxjs/operators'

import { LocalStorageService } from  '../system/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public url;
  public identity;
  public token;
  
  constructor(
    private _http:HttpClient,
    private _localStorage:LocalStorageService
  ) { 
    this.url = global.url;
    this.identity =this._localStorage.getIdentity();
    this.token = this._localStorage.getToken()
  }

  login(userLogin , gethash = null)
  {
    if(gethash != null)
    {
      userLogin.gethash = gethash
    }
    let params = JSON.stringify(userLogin);
    return this._http.post(this.url+'login',params).pipe(map(res => res));
  }
  saveAlumno(alumno)
  {
    let params = JSON.stringify(alumno);
    return this._http.post(this.url+'saveUser',params).pipe(map(res => res));
  }
  getDataUser(idUser)
  {
    return this._http.get(this.url+'getUser/'+idUser).pipe(map(res => res));
  }
  getUserforType(tipo)
  {
    return this._http.get(this.url+'getUserforType/'+tipo).pipe(map(res => res));
  }
  updateUSer(idUser,data)
  { 
    let params = JSON.stringify(data);   
    return this._http.put(this.url+'updateUser/'+idUser,params).pipe(map(res => res));
  }
  UpdateImageProfile(ruta:string, params: Array<string>, files: Array<File>,token:string){                    
    return new Promise(function(resolve, reject){
        var formData: any = new FormData();
        var xhr= new XMLHttpRequest();  
        for(var i = 0; i < files.length; i++)
        {
            formData.append('image', files[i], files[i].name);
        }
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4) {
                if (xhr.status==200) {
                    resolve(JSON.parse(xhr.response));
                }
                else{
                    reject(xhr.response);
                }                
            }
        }                
        xhr.open('POST',ruta, true);
        xhr.setRequestHeader('Authorization', token);
        xhr.send(formData);        
    });
} 
  

}
