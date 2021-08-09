import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jaiBalaJi';
  passwordData ={
    // userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    oldPassword: "",
    newPassword: "",
    // confirm_password: ""
  }
  public year
  public menuData: any
  public currentPassword: null;
  public newPassword: null;
  public confirmPassword: null
  obj_error_msg: any[];
  userDisplayName: any;
  constructor(public LoginService: LoginService,public cookieService: CookieService, private toastr: ToastrService) { }
  ngOnInit(): void {
    let d = new Date();
    this.year = d.getFullYear();
    this.userDisplayName = this.cookieService.get('username');
  }
  getMenu(id) {
    this.LoginService.menu(id).then((data) => {
      this.menuData = data

    }).catch(error => {



    })
  }
    /* Validation */
    checkvalidation():any 
    {
      this.obj_error_msg = [];
        if (this.passwordData.oldPassword == null || this.passwordData.oldPassword === '') {
        this.obj_error_msg.push('Password is required');
      }
      if (this.newPassword == null || this.newPassword === '') {
        this.obj_error_msg.push('New Password is required');
      }
      if (this.passwordData.newPassword == null || this.passwordData.newPassword === '') {
        this.obj_error_msg.push('Confirm Password is required');
      }
    
    
  
      if (this.obj_error_msg.length === 0) {
        this.obj_error_msg = [];
        return true;
      } 
      else if (this.obj_error_msg.length >1) {
        this.toastr.error('Please fill the required values');
        return false;
      }
      else if (this.obj_error_msg.length = 1) {
        this.obj_error_msg.forEach((element:any) => {
          this.toastr.error(element);
        });
        return false;
      }
    }
  
  changePassword() {
    if(!this.checkvalidation()) {
      return;
    }    // let json = {
    //   userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //   oldPassword: "string",
    //   newPassword: "string"
    // }

    this.LoginService.changePassword(this.passwordData).then(response => {
      let data = response;
      console.log(data);

    }).catch(error => {



    })
  }
  logout()
  {
   this.LoginService.logoutUser();
  }

  goToModule(event: any) {

  }
}
