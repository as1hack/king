import { Component, OnInit } from '@angular/core';
// Service 
import { LoginService,  } from '../../services/login.service';
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Router,ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';  
import { CookieService } from 'ngx-cookie-service';  
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 public rows :any;
 public columns: any;
 public columnMode = ColumnMode;
 obj_error_msg : any = [];

 public resultList = [{
  user_name: "Test",
  email: "test@example.com",
  phone_number: "022 3254 2454 45",
  gender: "Male",
  address: "1, Main street, Chennai - 600123"
}]
loginData = {
  username:'',
  password:'',
  grant_type: "password"

}
// password:string = '';
// username:string = '';

public columnInfoArray = [{
  label: "User Name",
  prop: "user_name"
}, {
  label: "Email",
  prop: "email"
}, {
  label: "Phone",
  prop: "phone_number"
}, {
  label: "Gender",
  prop: "gender"
}, {
  label: "Address",
  prop: "address"
}]
public menuData:any
// public Obj: User;  

  constructor(public LoginService: LoginService,private toaster : ToastrService,
    public router : Router, public APP : AppComponent, public activatedRoute: ActivatedRoute, private cookieService: CookieService,private spinner: NgxSpinnerService) { 
    // this.Obj = new User();  

  }

  ngOnInit(): void {
    
    this.rows = [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  this.columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
  ];
  
  }

    /* Validation */
    checkvalidation():any 
    {
      this.obj_error_msg = [];
        if (this.loginData.username == null || this.loginData.username === '') {

        this.obj_error_msg.push('email is required');
        
      }
      if (this.loginData.password == null || this.loginData.password === '') {
        this.obj_error_msg.push('password is required');
        
      }
  
      if (this.obj_error_msg.length === 0) {
        this.obj_error_msg = [];
        return true;
      } 
      else if (this.obj_error_msg.length >1) {
        this.toaster.error('Please fill the required values');
        return false;
      }
      else if (this.obj_error_msg.length = 1) {
        this.obj_error_msg.forEach((element:any) => {
          this.toaster.error(element);
        });
        return false;
      }
    }


  login()
  {
    // let user = {
    //   username: this.username.trim(),
    //   password: this.password,
    //   grant_type: "password"
    // };
    if(!this.checkvalidation()) {
      return;
    }
    debugger
    this.spinner.show();
    
    this.LoginService.login(this.loginData).then(response=>{
      let data:any =response
      // data = response;
      this.cookieService.set('username', data.username);  
      this.cookieService.set('token', data.access_token);  
      this.cookieService.set('roleID', data.roleId);
      this.cookieService.set('userID', data.user_Id);


      localStorage.setItem('token', data.access_token);
this.APP.getMenu(data.roleId)
      this.router.navigateByUrl('/role');
      this.spinner.hide();
      // [routerLink]="[ '/dashboard' ]"
    }, error=>{
      this.spinner.hide();
      console.log(error);
    })
  }

  loginWithUserNameAndPassword(){

  }
 

}
