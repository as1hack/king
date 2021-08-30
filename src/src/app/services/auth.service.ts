import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: LoginService, protected router: Router) { }

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

  canActivate() {
    if (!this.auth.loggedIn()) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
}
}
