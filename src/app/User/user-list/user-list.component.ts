import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'src/app/Common/page';
import { MenuService } from 'src/app/services/Menu/menu.service';
import { UserService } from 'src/app/services/User/user.service';
import { ColumnMode } from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  isEditMode: boolean;
  public error_type !: String
  public errorMsg: string[] = [];
  public columnMode = ColumnMode;
  public Role = "";
  public email ="";
  public staffName = "";
  public username = "";
  public password = "";
  public agent = "";
  public mobail = "";
  public address = "";

  createGet: any;
  public menuBaseId: any
  isMainEnable: boolean
  isSubEnable: boolean
  public page = new Page();
  public allUser: any;
  recordId: any;

  constructor(public userService: UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.setPage({ offset: 0, pageSize: 10})
    this.getUserGet()

  }


  getUserGet() {
    this.userService.createGetUser().then((data) => {
      this.createGet = data

    }).catch(error => {

      this.page.totalPages = 22 / 3

    })
  }

  setPage(event:any){
    this.page.pageIndex = event.offset;
    this.page.pageSize = event.pageSize;
    this.errorMsg=[]
    this.userService.user(this.page)
    .then(
      response => {
        this.toastr.success('Success1', 'response1');
        this.allUser=response as Page  
        this.page.totalCount = this.allUser.totalCount
    this.page.totalPages = this.page.totalCount / this.page.pageSize;      
      },
      error => {
        this.toastr.error('Error', 'response');
        this.error_type='Error'
        this.errorMsg.push('You have error from server')
        console.error(error);       
      });
  }
  userCreate() {
    let json = {
      roleId: this.Role,
      name: this.staffName,
      email:this.email,
      username: this.username,
      password: this.password,
      Agent: this.agent,
      mobile: this.mobail,
      address: this.address,
      recordState: 'Active',

    }

    this.isEditMode = false;


    this.userService.addUser(json).then((data) => {
      debugger
      console.info('data', data);
      alert('ok')
    }).catch(error => {
      alert('erorr')
      console.log(error);

    })
  }
  

  onCreate(){
    this.Role=null
    this.isEditMode=false;
  }

  onEdit(event: any) {
    this.staffName = event.name;
    this.username = event.username;
    this.agent = event.Agent;
    this.password = event.password;
    this.mobail = event.mobile;
    this.address = event.address;
    this.Role = event.roleId;
    this.recordId = event.id
    this.isEditMode = true;
   
    
  }

  updateMenu() {
    let json = {
      id: this.recordId,
      name: this.staffName,
      recordState: 'Active',   
      roleId: this.Role,
      username: this.username,
      password: this.password,
      Agent: this.agent,
      mobile: this.mobail,
      address: this.address,
      // createdBy: "3e4317d6-79c7-40f1-c39e-08d94f34ff4e",
      // updatedBy: "3e4317d6-79c7-40f1-c39e-08d94f34ff4e"

    }
    this.userService.updateUser(json).then(
      (response) => {                           //Next callback
        this.setPage({ offset: 0, pageSize: 10 })
        this.toastr.success('Success', 'response');
        alert('success')
      },
      (error) => {
        this.setPage({ offset: 0, pageSize: 10 })
        alert('error')              //Error callback
       }
    )
    
  }

 

  deleteUser(event: any) {
    let json = {
      id: event.id,
      recordState: 'Deleted'
    }
    this.userService.deleteUser(json).then((data) => {
      debugger

    }).catch(error => {


    })
  }



}
