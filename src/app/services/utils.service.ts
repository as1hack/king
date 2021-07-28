import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
// public baseUrl= 'api/'
public baseUrl='http://13.233.119.97/api/'
  constructor() { }


  createHeader() {
    let headers = new HttpHeaders();

    headers = headers.set('content-type', 'application/json');

    let token = localStorage.getItem("token");
    /*if access token is set then append it to headers of api */
    if (token) {
      // let token1 = JSON.parse(token).access_token;      
      headers = headers.set('Authorization', 'Bearer ' + token)
      // header.append('Authorization', 'Bearer ' + token);
    }
    return headers;
  }
}
