import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-jantri-list',
  templateUrl: './jantri-list.component.html',
  styleUrls: ['./jantri-list.component.scss']
})
export class JantriListComponent implements OnInit {
  public column:any[]=[]
  public columnInput:any[]=[]
  firstColumn= null;
  secondColumn= null;
  thirdColumn= null;
  fourthColumn= null;
  fifthColumn= null;
  sixthColumn= null;
  seventhColumn= null;
  eighthColumn= null;
  ninthColumn= null;
  tenthColumn= null;
  eleventhColumn= null;
  baharColumn=null;
  anderColumn=null;
  constructor() { }

  ngOnInit(): void {

    this.column=[{
      number:[{values:[{1:null,val:1},{2:null,val:2},{3:null,val:3},{4:null,val:4},{5:null,val:5},{6:null,val:6},{7:null,val:7},{8:null,val:8},{9:null,val:9},{10:null,val:10}]},
      {values:[{11:null,val:11},{12:null,val:12},{13:null,val:13},{14:null,val:14},{15:null,val:15},{16:null,val:16},{17:null,val:17},{18:null,val:18},{19:null,val:19},{20:null,val:20}]},
      {values:[{21:null,val:21},{22:null,val:22},{23:null,val:23},{24:null,val:24},{25:null,val:25},{26:null,val:26},{27:null,val:27},{28:null,val:28},{29:null,val:29},{30:null,val:30}]},
      {values:[{31:null,val:31},{32:null,val:32},{33:null,val:33},{34:null,val:34},{35:null,val:35},{36:null,val:36},{37:null,val:37},{38:null,val:38},{39:null,val:39},{40:null,val:40}]},
      {values:[{41:null,val:41},{42:null,val:42},{43:null,val:43},{44:null,val:44},{45:null,val:45},{46:null,val:46},{47:null,val:47},{48:null,val:48},{49:null,val:49},{50:null,val:50}]},
      {values:[{51:null,val:51},{52:null,val:52},{53:null,val:53},{54:null,val:54},{55:null,val:55},{56:null,val:56},{57:null,val:57},{58:null,val:58},{59:null,val:59},{60:null,val:60}]},
      {values:[{61:null,val:61},{62:null,val:62},{63:null,val:63},{64:null,val:64},{65:null,val:65},{66:null,val:66},{67:null,val:67},{68:null,val:68},{69:null,val:69},{70:null,val:70}]},
      {values:[{71:null,val:71},{72:null,val:72},{73:null,val:73},{74:null,val:74},{75:null,val:75},{76:null,val:76},{77:null,val:77},{78:null,val:78},{79:null,val:79},{80:null,val:80}]},
      {values:[{81:null,val:81},{82:null,val:82},{83:null,val:83},{84:null,val:84},{85:null,val:85},{86:null,val:86},{87:null,val:87},{88:null,val:88},{89:null,val:89},{90:null,val:90}]},
      {values:[{91:null,val:91},{92:null,val:92},{93:null,val:93},{94:null,val:94},{95:null,val:95},{96:null,val:96},{97:null,val:97},{98:null,val:98},{99:null,val:99},{100:null,val:100}]}],
      bahar:[{B1:null,val:'B1'},{B2:null,val:'B2'},{B3:null,val:'B3'},{B4:null,val:'B4'},{B5:null,val:'B5'},{B6:null,val:'B6'},{B7:null,val:'B7'},{B8:null,val:'B8'},{B9:null,val:'B9'},{B10:null,val:'B10'}],
      ander:[{A1:null,val:'A1'},{A2:null,val:'A2'},{A3:null,val:'A3'},{A4:null,val:'A4'},{A5:null,val:'A5'},{A6:null,val:'A6'},{A7:null,val:'A7'},{A8:null,val:'A8'},{A9:null,val:'A9'},{A10:null,val:'A10'}],
      
    }
      
    
    ]
    // this.columnInput=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  }

  utarData(){
    for (let i = 0; i < this.column.length; i++) {

   return this.column[0]['number'][i].number.map((a)=> {return a[a.val]}).reduce((a,b)=> {return a +b ;})
    }
  }
  getRowTotal(index:number){
  //let  values:[{1:1,val:1},{2:2,val:2},{3:3,val:3},{4:4,val:4},{5:5,val:5},{6:6,val:6},{7:7,val:7},{8:8,val:8},{9:9,val:9},{10:10,val:10}]
  console.log('sdfsdf',this.column[0]['number'][index].values);
  for (let i = 0; i < this.column.length; i++) {
return this.column[i]['number'][index].values.map((a)=> {return a[a.val]}).reduce((a,b)=> {return a +b ;})
    }
    }
  getFirstColumnTotal(){
 this.firstColumn=[this.column[0]['number'][0].values[0]["1"],this.column[0]['number'][1].values[0]["11"],this.column[0]['number'][2].values[0]["21"],this.column[0]['number'][3].values[0]["31"],this.column[0]['number'][4].values[0]["41"],this.column[0]['number'][5].values[0]["51"],this.column[0]['number'][6].values[0]["61"],this.column[0]['number'][7].values[0]["71"],this.column[0]['number'][8].values[0]["81"],this.column[0]['number'][9].values[0]["91"]].reduce((a,b)=> {return a +b ;})
 return this.firstColumn
}
getSecondColumnTotal(){
 this.secondColumn= [this.column[0]['number'][0].values[1]["2"],this.column[0]['number'][1].values[1]["12"],this.column[0]['number'][2].values[1]["22"],this.column[0]['number'][3].values[1]["32"],this.column[0]['number'][4].values[1]["42"],this.column[0]['number'][5].values[1]["52"],this.column[0]['number'][6].values[1]["62"],this.column[0]['number'][7].values[1]["72"],this.column[0]['number'][8].values[1]["82"],this.column[0]['number'][9].values[1]["92"]].reduce((a,b)=> {return a +b ;}) 
 
  return this.secondColumn
}
getThirdColumnTotal(){
  this.thirdColumn= [this.column[0]['number'][0].values[2]["3"],this.column[0]['number'][1].values[2]["13"],this.column[0]['number'][2].values[2]["23"],this.column[0]['number'][3].values[2]["33"],this.column[0]['number'][4].values[2]["43"],this.column[0]['number'][5].values[2]["53"],this.column[0]['number'][6].values[2]["63"],this.column[0]['number'][7].values[2]["73"],this.column[0]['number'][8].values[2]["83"],this.column[0]['number'][9].values[2]["93"]].reduce((a,b)=> {return a +b ;})
   return this.thirdColumn
}
getFourthColumnTotal(){
  this.fourthColumn=[this.column[0]['number'][0].values[3]["4"],this.column[0]['number'][1].values[3]["14"],this.column[0]['number'][2].values[3]["24"],this.column[0]['number'][3].values[3]["34"],this.column[0]['number'][4].values[3]["44"],this.column[0]['number'][5].values[3]["54"],this.column[0]['number'][6].values[3]["64"],this.column[0]['number'][7].values[3]["74"],this.column[0]['number'][8].values[3]["84"],this.column[0]['number'][9].values[3]["94"]].reduce((a,b)=> {return a +b ;})
  return this.fourthColumn
}
getFifthColumnTotal(){
 this.fifthColumn= [this.column[0]['number'][0].values[4]["5"],this.column[0]['number'][1].values[4]["15"],this.column[0]['number'][2].values[4]["25"],this.column[0]['number'][3].values[4]["35"],this.column[0]['number'][4].values[4]["45"],this.column[0]['number'][5].values[4]["55"],this.column[0]['number'][6].values[4]["65"],this.column[0]['number'][7].values[4]["75"],this.column[0]['number'][8].values[4]["85"],this.column[0]['number'][9].values[4]["95"]].reduce((a,b)=> {return a +b ;})
  return this.fifthColumn
}
getSixthColumnTotal(){
  this.sixthColumn=[this.column[0]['number'][0].values[5]["6"],this.column[0]['number'][1].values[5]["16"],this.column[0]['number'][2].values[5]["26"],this.column[0]['number'][3].values[5]["36"],this.column[0]['number'][4].values[5]["46"],this.column[0]['number'][5].values[5]["56"],this.column[0]['number'][6].values[5]["66"],this.column[0]['number'][7].values[5]["76"],this.column[0]['number'][8].values[5]["86"],this.column[0]['number'][9].values[5]["96"]].reduce((a,b)=> {return a +b ;})
  return this.sixthColumn
}
getSeventhColumnTotal(){
  this.seventhColumn=[this.column[0]['number'][0].values[6]["7"],this.column[0]['number'][1].values[6]["17"],this.column[0]['number'][2].values[6]["27"],this.column[0]['number'][3].values[6]["37"],this.column[0]['number'][4].values[6]["47"],this.column[0]['number'][5].values[6]["57"],this.column[0]['number'][6].values[6]["67"],this.column[0]['number'][7].values[6]["77"],this.column[0]['number'][8].values[6]["87"],this.column[0]['number'][9].values[6]["97"]].reduce((a,b)=> {return a +b ;})
  return this.seventhColumn
}
getEighthColumnTotal(){
  this.eighthColumn= [this.column[0]['number'][0].values[7]["8"],this.column[0]['number'][1].values[7]["18"],this.column[0]['number'][2].values[7]["28"],this.column[0]['number'][3].values[7]["38"],this.column[0]['number'][4].values[7]["48"],this.column[0]['number'][5].values[7]["58"],this.column[0]['number'][6].values[7]["68"],this.column[0]['number'][7].values[7]["78"],this.column[0]['number'][8].values[7]["88"],this.column[0]['number'][9].values[7]["98"]].reduce((a,b)=> {return a +b ;})
   return this.eighthColumn
}
getNinthColumnTotal(){
  this.ninthColumn= [this.column[0]['number'][0].values[8]["9"],this.column[0]['number'][1].values[8]["19"],this.column[0]['number'][2].values[8]["29"],this.column[0]['number'][3].values[8]["39"],this.column[0]['number'][4].values[8]["49"],this.column[0]['number'][5].values[8]["59"],this.column[0]['number'][6].values[8]["69"],this.column[0]['number'][7].values[8]["79"],this.column[0]['number'][8].values[8]["89"],this.column[0]['number'][9].values[8]["99"]].reduce((a,b)=> {return a +b ;})
   return this.ninthColumn
}
getTenthColumnTotal(){
 this.tenthColumn= [this.column[0]['number'][0].values[9]["10"],this.column[0]['number'][1].values[9]["20"],this.column[0]['number'][2].values[9]["30"],this.column[0]['number'][3].values[9]["40"],this.column[0]['number'][4].values[9]["50"],this.column[0]['number'][5].values[9]["60"],this.column[0]['number'][6].values[9]["70"],this.column[0]['number'][7].values[9]["80"],this.column[0]['number'][8].values[9]["90"],this.column[0]['number'][9].values[9]["100"]].reduce((a,b)=> {return a +b ;})
  return this.tenthColumn
}
getEleventhColumnTotal(){
  
  this.eleventhColumn= [this.firstColumn,this.secondColumn,this.thirdColumn,this.fourthColumn,this.fifthColumn,this.sixthColumn,this.seventhColumn,this.eighthColumn,this.ninthColumn,this.tenthColumn].reduce((a,b)=> {return a +b ;})
  return this.eleventhColumn
}
getBaharTotal(){
   this.baharColumn =[this.column[0]['bahar'][0]["B1"],this.column[0]['bahar'][1]["B2"],this.column[0]['bahar'][2]["B3"],this.column[0]['bahar'][3]["B4"],this.column[0]['bahar'][4]["B5"],this.column[0]['bahar'][5]["B6"],this.column[0]['bahar'][6]["B7"],this.column[0]['bahar'][7]["B8"],this.column[0]['bahar'][8]["B9"],this.column[0]['bahar'][9]["B10"]].reduce((a,b)=> {return a +b ;})
   return this.baharColumn
}
getAnderTotal(){
  this.anderColumn= [this.column[0]['ander'][0]["A1"],this.column[0]['ander'][1]["A2"],this.column[0]['ander'][2]["A3"],this.column[0]['ander'][3]["A4"],this.column[0]['ander'][4]["A5"],this.column[0]['ander'][5]["A6"],this.column[0]['ander'][6]["A7"],this.column[0]['ander'][7]["A8"],this.column[0]['ander'][8]["A9"],this.column[0]['ander'][9]["A10"]].reduce((a,b)=> {return a +b ;})
  return this.anderColumn
}
grandTotalgrandTotal(){
  return[this.eleventhColumn,this.baharColumn,this.anderColumn].reduce((a,b)=> {return a +b ;})
}

keytab(event) {
  $(document).on('keypress', 'input,select', function (e) {
    if (e.which == 13) {
      const textboxes = $('input,select');
      const currentBoxNumber = textboxes.index(this);
      const nextBox = textboxes[currentBoxNumber + 1]
      nextBox.focus();
  
    }
});
}


}
