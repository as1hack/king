import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
// public baseUrl= 'api/'
public baseUrl='http://13.233.119.97/api/'
  constructor() { }


  createHeader() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

   // headers = headers.set('content-type', 'application/json');

    let token = localStorage.getItem('token');
    /*if access token is set then append it to headers of api */
    if (token) {
      // let token1 = JSON.parse(token).access_token;      
      // headers = headers.set('Authorization', 'Bearer ' + token)
      headers=  headers.append('Authorization', 'Bearer ' + token);
     // headers.append('Authorization', 'Bearer ' + token);
    }
    return headers;
  }
}
