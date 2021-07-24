import { Component, OnInit } from '@angular/core';
// Service 
import { LoginService } from '../../services/login.service';
import { ColumnMode } from "@swimlane/ngx-datatable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 public rows :any;
 public columns: any;
 public columnMode = ColumnMode;
 public resultList = [{
  user_name: "Test",
  email: "test@example.com",
  phone_number: "022 3254 2454 45",
  gender: "Male",
  address: "1, Main street, Chennai - 600123"
}]

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
  constructor(public LoginService: LoginService) { }

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

  loginWithUserNameAndPassword(){

  }

}
