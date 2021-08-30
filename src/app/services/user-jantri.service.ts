import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserJantriService {
  baseUrl= new UtilsService().baseUrl

  constructor(private http: HttpClient, public utils:UtilsService) { }
  createHeader() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem("token");
    /*if access token is set then append it to headers of api */
    if (token) {

      headers = headers.set('Authorization', 'Bearer ' + token)
    }
    return headers;
  }

  addUserJantri(data: any) {
    return this.http.post(this.baseUrl + 'Jantri/CreateTransaction', data, { headers: this.utils.createHeader() }).toPromise();
  }
}
