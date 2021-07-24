import { Component, OnInit } from '@angular/core';
// Service 
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MenuService } from 'src/app/services/Menu/menu.service';


/* model */
import { Page } from '../../Common/page';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  public allMenu :any;
  public columns: any;
  public menuCreateGetData : any;
  public columnMode = ColumnMode;
  public Role = ""
  public menuName= ""
  public link= ""
  public mainMenu= ""
  public subMenu= ""
  public level= ""
  public position= ""
  
  public menuBaseId:any
  public page = new Page();
  createGet: any;
  constructor(public service:MenuService) { }


  ngOnInit(): void {
    this.allMenu = [
      { name: 'Austin', recordState: 'Active', company: 'Swimlane' },
      { name: 'Dany', recordState: 'Inactive', company: 'KFC' },
      { name: 'Molly', recordState: 'Active', company: 'Burger King' },
  ];
  this.columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
  ];
  this.getMenuList();
  this.getMenuGet()
  }
  getMenuList(){
    this.service.roleList().then((data)=>{
      debugger
      this.allMenu=data as Page
      // this.page.totalPages = this.page.totalCount / this.page.pageSize;
      this.page.totalPages = this.page.totalCount / this.page.pageSize;
      
   }).catch(error =>{
     
    this.page.totalPages = 22/3
  
   })
  }

  getMenuGet(){
    this.service.createGetMenu().then((data)=>{
      this.createGet=data
     
   }).catch(error =>{
     
    this.page.totalPages = 22/3
  
   })
  }

  deleteMenu(event:any){
    let json={
      id:event.id,
      recordState:'Delete'
    }
    this.service.deleteMenu(json).then((data)=>{
      debugger
      
   }).catch(error =>{
   
  
   })
  }

  menuCreate(){
    let json={
      roleId:this.Role,
      name:this.menuName,
      route:this.link,
      level:this.level,
      parentMenu:this.mainMenu,
      childMenu:this.subMenu,
      order:this.position,
      recordState:'Active'
    }

   
  this.service.create(json).then((data)=>{
    debugger
    console.info('data',data);
alert('ok')
 }).catch(error =>{
  alert('ero')
console.log(error);

 })
  }

  getMenuBaseOnRoleId(id){
    console.log('id',id);
    
    this.service.getMenu(id).then((data)=>{
     this.menuBaseId=data
      
   }).catch(error =>{
     
    this.page.totalPages = 22/3
  
   })
  }
}
