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
  isloggedin = false;  
  
  

  constructor(private http: HttpClient, public utils:UtilsService) { }
//   login(loginInfo:any){
    
// const header= new HttpHeaders({'Content-Type': 'application/json'})
//  const headers = new HttpHeaders()
//              .set('Content-Type', 'application/json');

// return this.http.post(this.baseUrl + 'token/auth',  loginInfo,{headers}).pipe(shareReplay())
// createHeaderFormData() {
//   let headers = new HttpHeaders();



//   headers = headers.set('content-type', 'application/json');

//   let token = localStorage.getItem("token");
//   /*if access token is set then append it to headers of api */
//   if (token) {

//     // let token1 = JSON.parse(token).access_token;      
//     headers = headers.set('Authorization', 'Bearer ' + token)
//     // header.append('Authorization', 'Bearer ' + token);
//   }
//   return headers;
// }

createHeader() {
  let headers = new HttpHeaders();



  // headers = headers.set('content-type', 'application/json');

  let token = localStorage.getItem("token");
  /*if access token is set then append it to headers of api */
  if (token) {

    // let token1 = JSON.parse(token).access_token;      
    headers = headers.set('Authorization', 'Bearer ' + token)
    // header.append('Authorization', 'Bearer ' + token);
  }
  return headers;
}


login(User: any,) {
  return this.http.post(this.baseUrl + 'token/auth', User).toPromise();

  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  menu(id){
    return new Promise((resolve,reject) => {
    // const header= new HttpHeaders({'Content-Type': 'application/json'})
     const headers = new HttpHeaders()
                 .set('Content-Type', 'application/json');
    
    return this.http.get(this.baseUrl + 'Menu/GetDynamicMenuByRoleId?roleId='+id,  {headers}).subscribe(data => {
        
      resolve(data);
    }, error => {
      
      
      reject(error);
   })
  })
    
      }
}
