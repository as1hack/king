import { Injectable } from '@angular/core';
/* Http and Header */
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ustils
import { UtilsService } from '../services/utils.service';
// rxjs
import {shareReplay } from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})

export class LoginService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService) { }
  login(loginInfo:any){
    
// const header= new HttpHeaders({'Content-Type': 'application/json'})
 const headers = new HttpHeaders()
             .set('Content-Type', 'application/json');

return this.http.post(this.baseUrl + 'token/auth',  loginInfo,{headers}).pipe(shareReplay())

  }
  
}
