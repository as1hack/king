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
  menu(){
    return new Promise((resolve,reject) => {
    // const header= new HttpHeaders({'Content-Type': 'application/json'})
     const headers = new HttpHeaders()
                 .set('Content-Type', 'application/json');
    
    return this.http.get(this.baseUrl + 'Menu/GetDynamicMenuByRoleId?roleId=ee6a5149-dbce-4cf1-0661-08d94ba709fe',  {headers}).subscribe(data => {
        
      resolve(data);
    }, error => {
      
      
      reject(error);
   })
  })
    
      }
}
