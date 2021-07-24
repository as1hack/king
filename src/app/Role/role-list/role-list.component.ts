import { Component, OnInit } from '@angular/core';
// Service 
import { ColumnMode } from "@swimlane/ngx-datatable";
import { RoleService } from 'src/app/services/Role/role.service';


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
  public error_type !: String
  public page = new Page();
  public errorMsg: string[] = [];
  RoleList: any;
  constructor(public service:RoleService) { }

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
  createRole(){
    let json={
      name:this.Role,
      recordState:'Active'
    }
    debugger
this.service.role(json).subscribe(
  response => {    
    alert('dfd')
    this.setPage({ offset: 0, pageSize: 10})

  })
  
 
  }

  setPage(event:any){
    this.page.pageIndex = event.offset;
    this.page.pageSize = event.pageSize;
    this.errorMsg=[]
    this.service.getRole(this.page)
    .subscribe(
      response => {
        
        this.allRole=response as Page  
        this.page.totalCount = this.allRole.totalCount
    this.page.totalPages = this.page.totalCount / this.page.pageSize;  
    
    
      },
      error => {
        this.error_type='Error'
        this.errorMsg.push('You have error from server')
        console.error(error);       
        
      });
      

  }
  deleteRole(event:any){
    let json={
      id:event.id,
      recordState:'Deleted'
    }
    this.service.deleteRole(json).subscribe(
      response => {    
        this.allRole=response  
    
      },
      error => {
        this.error_type='Error'
        this.errorMsg.push('You have error from server')
        console.error(error);       
        
      });
   
  }

}

