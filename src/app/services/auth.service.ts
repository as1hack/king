import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: LoginService, protected router: Router) { }

  canActivate() {
    if (!this.auth.loggedIn()) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
}
}
