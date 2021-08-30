import { Injectable } from '@angular/core';
/* Http and Header */
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ustils
import { UtilsService } from '../../services/utils.service';
// rxjs
import {shareReplay } from 'rxjs/operators'
import {catchError } from 'rxjs/operators'
import {Observable,throwError } from 'rxjs'
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';  


/* map and Promise */



@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService,private cookieService: CookieService) { }

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

  role(roleInfo:any){   
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', 'Bearer ' + 'token')
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
              return this.http.post(this.baseUrl + 'Role/Create', roleInfo ,{headers:this.utils.createHeader()}).toPromise();
}

getRole(event:any){
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer ' + this.cookieService.get('token'))
   
  return this.http.get(this.baseUrl + 'Role/GetAll?pageIndex=' +event.pageIndex+ '&pageSize='+ event.pageSize,{headers:this.utils.createHeader()});
  
}
deleteRole(data:any): Observable<any[]>{
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this.cookieService.get('token'))
//   const headers = new Headers();
// headers.append('Content-Type', 'application/json');
// const options = new RequestOptions({ headers: headers });
  // return this.http.post(this.baseUrl + 'Role/UpdateRecordState', data ,{headers:headers}).toPromise()

  return this.http.post<any[]>(this.baseUrl + 'Role/UpdateRecordState', data  ,{headers:this.utils.createHeader()})
 
   
}

updateRole(data:any): Observable<any[]>{
  let headers = new HttpHeaders();

  headers = headers.set('Authorization', 'Bearer ' + this.cookieService.get('token') )
//   const headers = new Headers();
// headers.append('Content-Type', 'application/json');
// const options = new RequestOptions({ headers: headers });
  // return this.http.post(this.baseUrl + 'Role/UpdateRecordState', data ,{headers:headers}).toPromise()

  return this.http.post<any[]>(this.baseUrl + 'Role/Update', data  ,{headers:this.utils.createHeader()})
 
   
}

createRolePermission(data:any): Observable<any[]>{
  let headers = new HttpHeaders();

  headers = headers.set('Authorization', 'Bearer ' + this.cookieService.get('token') )

  return this.http.post<any[]>(this.baseUrl + 'Role/CreateRolePermission', data  ,{headers:this.utils.createHeader()})
 
   
}

}
