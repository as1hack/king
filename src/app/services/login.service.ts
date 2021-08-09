import { Injectable } from '@angular/core';
/* Http and Header */
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ustils
import { UtilsService } from '../services/utils.service';
// rxjs
import {shareReplay } from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})

export class LoginService {
  baseUrl= new UtilsService().baseUrl
  isloggedin = false;  
  
  

  constructor(private http: HttpClient,private router: Router, public utils:UtilsService,private cookiesService  : CookieService) { }
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
  let headers: HttpHeaders = new HttpHeaders();
  let tokens = this.cookiesService.get('token')

  headers = headers.append('Authorization', 'Bearer ' + tokens);
  return headers;
}


login(User: any,) {
  return this.http.post(this.baseUrl + 'token/auth', User).toPromise();

  }
  logoutUser() {
    localStorage.removeItem('token');
    this.cookiesService.delete('token');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  loggedIn() {
    return !localStorage.getItem('token');
  }

  // changepassword(email: any) {
  //   return this.http.post(this.baseUrl + '/User/ChangePassword', email, { headers: this.createHeader() }).toPromise();
  // }

  changePassword(data: any) {
    console.log('header',this.utils.createHeader())
    return this.http.post(this.baseUrl + 'User/ChangePassword', data, { headers: this.utils.createHeader() }).toPromise();
  }

  menu(id){
    // return new Promise((resolve,reject) => {
    // const header= new HttpHeaders({'Content-Type': 'application/json'})
    //  const headers = new HttpHeaders()
    //              .set('Content-Type', 'application/json');
    
    return this.http.get(this.baseUrl + 'Menu/GetDynamicMenuByRoleId?roleId='+id,  { headers: this.utils.createHeader() }).toPromise();
      
    }
  

      password(json){
        return new Promise((resolve,reject) => {
          // const header= new HttpHeaders({'Content-Type': 'application/json'})
           const headers = new HttpHeaders()
                       .set('Content-Type', 'application/json');
          
          return this.http.post(this.baseUrl + 'User/ChangePassword'+json,  {headers: this.utils.createHeader() }).subscribe(data => {
              
            resolve(data);
          }, error => {
            
            
            reject(error);
         })
        })
      }
}
