import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service'
import { HttpInterceptor, HttpRequest , HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  public token;

  constructor(
    private _localStorageService:LocalStorageService
  ) { 
    
  }

   intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
      this.token = this._localStorageService.getToken();    
      console.log("Entra al Interceptor");      
      let headers;
      this.token ? headers = new HttpHeaders({'Content-Type':'application/json','Authorization':this.token}) : headers = new HttpHeaders({'Content-Type':'application/json'});
      const cloned = req.clone({
        headers
      });
      return next.handle(cloned);

  }
}
