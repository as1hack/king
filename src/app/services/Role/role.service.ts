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
    
    const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
              return this.http.post(this.baseUrl + 'Role/Create', roleInfo ,{headers});
}

getRole(event:any){
  const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
   
  return this.http.get(this.baseUrl + 'Role/GetAll?pageIndex=' +event.pageIndex+ '&pageSize='+ event.pageSize,{headers:headers});
  
}
deleteRole(data:any){
  const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
  return this.http.post(this.baseUrl + 'Role/UpdateRecordState', data ,{headers:headers});
   
}
}
