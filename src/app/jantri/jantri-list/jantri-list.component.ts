import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jantri-list',
  templateUrl: './jantri-list.component.html',
  styleUrls: ['./jantri-list.component.scss']
})
export class JantriListComponent implements OnInit {
  public column:any[]=[]
  public columnInput:any[]=[]
  constructor() { }

  ngOnInit(): void {

    this.column=[{values:[{1:null,val:1},{2:null,val:2},{3:null,val:3},{4:null,val:4},{5:null,val:5},{6:null,val:6},{7:null,val:7},{8:null,val:8},{9:null,val:9},{10:null,val:10}]},{values:[{11:null,val:11},{12:null,val:12},{13:null,val:13},{14:null,val:14},{15:null,val:15},{16:null,val:16},{17:null,val:17},{18:null,val:18},{19:null,val:19},{20:null,val:20}]}]
    // this.columnInput=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  }
  getRowTotal(index:number){
  //let  values:[{1:1,val:1},{2:2,val:2},{3:3,val:3},{4:4,val:4},{5:5,val:5},{6:6,val:6},{7:7,val:7},{8:8,val:8},{9:9,val:9},{10:10,val:10}]
  console.log('sdfsdf',this.column[index].values);
  
return this.column[index].values.map(function(a) {return a[a.val]}).reduce(function(a,b) {return a +b ;})
  }

}
