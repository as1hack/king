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



/* map and Promise */



@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService) { }

  role(roleInfo:any){   
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', 'Bearer ' + 'token')
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
              return this.http.post(this.baseUrl + 'Role/Create', roleInfo ,{headers:headers}).toPromise();
}

getRole(event:any){
  const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
   
  return this.http.get(this.baseUrl + 'Role/GetAll?pageIndex=' +event.pageIndex+ '&pageSize='+ event.pageSize);
  
}
deleteRole(data:any): Observable<any[]>{
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + 'token')
//   const headers = new Headers();
// headers.append('Content-Type', 'application/json');
// const options = new RequestOptions({ headers: headers });
  // return this.http.post(this.baseUrl + 'Role/UpdateRecordState', data ,{headers:headers}).toPromise()

  return this.http.post<any[]>(this.baseUrl + 'Role/UpdateRecordState', data  ,{headers:headers})
 
   
}

updateRole(data:any): Observable<any[]>{
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + 'token')
//   const headers = new Headers();
// headers.append('Content-Type', 'application/json');
// const options = new RequestOptions({ headers: headers });
  // return this.http.post(this.baseUrl + 'Role/UpdateRecordState', data ,{headers:headers}).toPromise()

  return this.http.post<any[]>(this.baseUrl + 'Role/Update', data  ,{headers:headers})
 
   
}
}
