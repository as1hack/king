import { Component, OnInit } from '@angular/core';
import { IDayCalendarConfig } from 'ng2-date-picker';
import { Page } from 'src/app/Common/page';
import { ShiftService } from 'src/app/services/shift/shift.service';

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent implements OnInit {
  public shiftName = "";
  public openDate: any; 
  nextDay: boolean;
  shiftWorking:any;
  createGet: any;
  rolePermission:any
  public page = new Page();
  allShift: Page;
  roles:  any = [];
  model:any;
  shiftTime=[];

  constructor(public service: ShiftService) { }

  ngOnInit(): void {
    this.setPage({ offset: 0, pageSize: 10 });
    this.getShiftGet()
  }

  getShiftTime(item,event){
    // this.childId=item.id
    this.shiftTime.push(this.rolePermission);
    console.log(this.rolePermission)
    
  }

  createPermission(){
    let json={
      name:this.shiftName,
      openDate:this.openDate,
      isNextDay:this.nextDay,
      shiftWorking:this.shiftWorking,
      shiftTimings:this.rolePermission
    }
    console.log(json)

    this.service.createShift(json).then((response : any) => {
      alert('succes')
     }, error => {
       alert('error')
      }
    )

   
  }

  setPage(event: any) {
    this.page.pageIndex = event.offset;
    this.page.pageSize = event.pageSize;
    this.service.shiftList().then((data) => {
      debugger
      this.allShift = data as Page
console.log(this.allShift)
      this.page.totalCount = this.allShift.totalCount
      this.page.totalPages = this.page.totalCount / this.page.pageSize;

    }).catch(error => {

      this.page.totalPages = 22 / 3

    })
  }


  getShiftGet() {
    this.service.getShift().then((data) => {
      this.createGet = data
      this.roles = this.createGet.roles
      console.log(this.roles)

    }).catch(error => {

      this.page.totalPages = 22 / 3

    })
  }

}
