import { Component, OnInit } from '@angular/core';
// Service 
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MenuService } from 'src/app/services/Menu/menu.service';
import { ToastrService } from 'ngx-toastr';

/* model */
import { Page } from '../../Common/page';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  public allMenu: any;
  public columns: any;
  public menuCreateGetData: any;
  public mainMenuData: any[] = [];
  public subMenuData: any[] = [];
  public columnMode = ColumnMode;
  public Role = "";
  public menuName = "";
  public link = "";
  public mainMenu = null;
  public subMenu = null;
  public level = "";
  public position = "";
  isEditMode: boolean;
  public menuBaseId: any
  public page = new Page();
  createGet: any;
  public recordId: string;
  isMainEnable: boolean
  isSubEnable: boolean
  constructor(public service: MenuService, private toastr: ToastrService) { }


  ngOnInit(): void {
    //   this.allMenu = [
    //     { name: 'Austin', recordState: 'Active', company: 'Swimlane' },
    //     { name: 'Dany', recordState: 'Inactive', company: 'KFC' },
    //     { name: 'Molly', recordState: 'Active', company: 'Burger King' },
    // ];
    this.columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
    ];
    this.setPage({ offset: 0, pageSize: 10 });
    this.getMenuGet()
  }
  setPage(event: any) {
    this.page.pageIndex = event.offset;
    this.page.pageSize = event.pageSize;
    this.service.roleList().then((data) => {
      debugger
      this.allMenu = data as Page

      this.page.totalCount = this.allMenu.totalCount
      this.page.totalPages = this.page.totalCount / this.page.pageSize;

    }).catch(error => {

      this.page.totalPages = 22 / 3

    })
  }

  getMenuGet() {
    this.service.createGetMenu().then((data) => {
      this.createGet = data

    }).catch(error => {

      this.page.totalPages = 22 / 3

    })
  }

  deleteMenu(event: any) {
    let json = {
      id: event.id,
      recordState: 'Deleted'
    }
    this.service.deleteMenu(json).then((data) => {
      debugger

    }).catch(error => {


    })
  }
  onCreate(){
    this.Role=null
    this.isEditMode=false;
  }
  checkLevelValue() {

    this.isMainEnable = this.level > '1' ? true : false;
    this.isSubEnable = this.level > '2' ? true : false;

    console.log('sdfsdfsdfsdf',this.menuBaseId);
    
    
      
      this.mainMenuData = this.menuBaseId.filter((element: any) => element.level == 1)
      this.subMenuData = this.menuBaseId.filter((element: any) => element.level == 2)
    
    


  }

  updateMenu() {
    let json = {
      id: this.recordId,
      name: this.menuName,
      recordState: 'Active',
      route: this.link,
      roleId: this.Role,
      parentMenu: this.level == '1' ? null : this.level == '2' ? this.mainMenu : this.subMenu,
      level: this.level,
      mainMenu: this.mainMenu,
      subMenu: this.subMenu,
      order: this.position,
      createdBy: "3e4317d6-79c7-40f1-c39e-08d94f34ff4e",
      updatedBy: "3e4317d6-79c7-40f1-c39e-08d94f34ff4e"

    }
    this.service.updateMenu(json).subscribe(
      (response) => {                           //Next callback
        this.setPage({ offset: 0, pageSize: 10 })
        this.toastr.success('Success', 'response');
        alert('success')
      },
      (error) => {
        this.setPage({ offset: 0, pageSize: 10 })
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
  menuCreate() {
    let json = {
      roleId: this.Role,
      name: this.menuName,
      route: this.link,
      level: this.level,
      parentMenu: this.level == '1' ? null : this.level == '2' ? this.mainMenu : this.subMenu,
      order: this.position,
      recordState: 'Active',
      createdBy: "3e4317d6-79c7-40f1-c39e-08d94f34ff4e",
      updatedBy: "3e4317d6-79c7-40f1-c39e-08d94f34ff4e"

    }

    this.isEditMode = false;


    this.service.create(json).then((data) => {
      debugger
      console.info('data', data);
      alert('ok')
    }).catch(error => {
      alert('ero')
      console.log(error);

    })
  }

  onEdit(event: any) {
    this.menuName = event.name;
    this.link = event.route;
    this.Role = event.roleId;
    this.level = event.level;
    this.mainMenu = event.level == '2' ? event.parentMenu : event.level == '3' ? event.parentOneUpMenu : null
    this.subMenu = event.level == '3' ? event.parentMenu : null
    this.position = event.order;
    this.recordId = event.id
    this.isEditMode = true;
  this.getMenuBaseOnRoleId(this.Role) 
    
    
  }

  getMenuBaseOnRoleId(id) {
    console.log('id', id);
    
    this.service.getMenu(id).then((data) => {
      this.menuBaseId = data
      
        this.checkLevelValue()
      
    }).catch(error => {

      this.page.totalPages = 22 / 3
      
        this.checkLevelValue()
      
    })
    
    

   
  }
}
