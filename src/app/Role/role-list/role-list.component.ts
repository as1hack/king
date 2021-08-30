import { Component, OnInit } from '@angular/core';
// Service 
import { ColumnMode } from "@swimlane/ngx-datatable";
import { RoleService } from 'src/app/services/Role/role.service';
import { ToastrService } from 'ngx-toastr';

/* model */
import { Page } from '../../Common/page';



@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  public allRole :any;
  public columns: any;
  public columnMode = ColumnMode;
  public Role=null
  public Devloper:string;
  public SuperAdmin:string;
  public Distributor:string;
  public Retailer:string;
  public Fanter:string;
  public CashAgent:string;
  public Admin:string;
  public Manager:string;
  public Marketer:string;
  public Auditor:string;
  public dataOperator:string;
  public tallyOperator:string;



  public error_type !: String
  public page = new Page();
  public errorMsg: string[] = [];
  RoleList: any;
  public editview = false;
  public editmode: any;
  public recordId :string;
  public baseId :string;
  public childId :string;

  obj_error_msg : any = [];
  // json={
  //   name:this.Role,
  //   recordState:'Active'
  // }

  isEditMode: boolean;
  selectedItemsList: any;
  checkedID: any;
  checkedIDs=[];
  constructor(public service:RoleService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allRole = [
      { name: 'Austin', recordState: 'Active', company: 'Swimlane' },
      { name: 'Dany', recordState: 'Inactive', company: 'KFC' },
      { name: 'Molly', recordState: 'Active', company: 'Burger King' },
  ];
  this.columns = [
    { prop: 'name' },
    { name: 'recordState' },
    { name: 'Company' }
];


  this.setPage({ offset: 0, pageSize: 10})
  }

  /* Validation */
  checkvalidation():any 
  {
    this.obj_error_msg = [];
      if (this.Role == null || this.Role === '') {

      this.obj_error_msg.push('role is required');
      
    }
  

    if (this.obj_error_msg.length === 0) {
      this.obj_error_msg = [];
      return true;
    } 
    else if (this.obj_error_msg.length >2) {
      this.toastr.error('Please fill the required values');
      return false;
    }
    else if (this.obj_error_msg.length = 1) {
      this.obj_error_msg.forEach((element:any) => {
        this.toastr.error(element);
        console.log('error',this.obj_error_msg)
      });
      return false;
    }
  }

  createRole(){
    if(!this.checkvalidation()) {
      return;
    }
    debugger
    let json={
      name:this.Role,
      recordState:'Active'
    }
this.service.role(json).then((response : any) => {
  alert('succes')
 }, error => {
   alert('error')
  }
)
  
 
  }
  getChildId(item,event){
    // this.childId=item.id
    if(event.target.checked) {

    this.checkedIDs.push(item.id);
    console.log(this.checkedIDs)
    }
  }

  addPermission(row){
    this.recordId=row.id
console.log(this.recordId)
console.log('child',this.childId)
  }

  onEdit(row){
    this.Role=row.name;
    this.recordId=row.id
    this.isEditMode=true;
  }
  onDelete(row){
    this.recordId=row.id
  }
  onCreate(){
    this.Role=null
    this.isEditMode=false;
  }


  createPermission(){
    let json={
      baseRoleId:this.recordId,
      childRoles:this.checkedIDs,
      recordState:'Active',

    }
    this.service.createRolePermission(json) .subscribe(
      (response) => {                           //Next callback
        this.setPage({ offset: 0, pageSize: 10})
       this.toastr.success('Success', 'response');
       alert('success')
      },
      (error) => {              
        this.setPage({ offset: 0, pageSize: 10})  
        alert('error')              //Error callback
      }
    )
   
  }

  updateRecord(){
    let json={
      id:this.recordId,
      name:this.Role,
      recordState:'Active',

    }
    this.service.updateRole(json) .subscribe(
      (response) => {                           //Next callback
        this.setPage({ offset: 0, pageSize: 10})
       this.toastr.success('Success', 'response');
       alert('success')
      },
      (error) => {              
        this.setPage({ offset: 0, pageSize: 10})  
        alert('error')              //Error callback
        // this.toastr.error('Error', 'Toastr fun!'); 
        //throw error;   //You can also throw the error to a global error handler
      }
    )
    // .then((response : any) => {
    //   this.setPage({ offset: 0, pageSize: 10})
    //   this.toastr.success('Success', response);
    //  }, error => {
    //   this.toastr.error('Error', 'Toastr fun!'); 
    //   }
    // )

  }

  setPage(event:any){
    this.page.pageIndex = event.offset;
    this.page.pageSize = event.pageSize;
    this.errorMsg=[]
    this.service.getRole(this.page)
    .subscribe(
      response => {
        this.toastr.success('Success1', 'response1');
        this.allRole=response as Page  
        this.page.totalCount = this.allRole.totalCount
    this.page.totalPages = this.page.totalCount / this.page.pageSize;  
    
    
      },
      error => {
        this.toastr.error('Error', 'response');
        this.error_type='Error'
        this.errorMsg.push('You have error from server')
        console.error(error);       
        
      });
      

  }
  deleteRole(){
    let json={
      id:this.recordId,
      recordState:'Deleted'
    }
    this.service.deleteRole(json) .subscribe(
      (response) => {                           //Next callback
        this.setPage({ offset: 0, pageSize: 10})
       this.toastr.success('Success', 'response');
      },
      (error) => {              
        this.setPage({ offset: 0, pageSize: 10})                //Error callback
        // this.toastr.error('Error', 'Toastr fun!'); 
        //throw error;   //You can also throw the error to a global error handler
      }
    )
    // .then((response : any) => {
    //   this.setPage({ offset: 0, pageSize: 10})
    //   this.toastr.success('Success', response);
    //  }, error => {
    //   this.toastr.error('Error', 'Toastr fun!'); 
    //   }
    // )


   
   
  }

}

