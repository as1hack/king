import { Component, HostListener, OnInit, ViewChildren } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { TagInputModule } from 'ngx-chips';
import { ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash'; 
import { CookieService } from 'ngx-cookie-service';
import { UserJantriService } from 'src/app/services/user-jantri.service';
declare var $:any;

@Component({
  selector: 'app-user-jantri',
  templateUrl: './user-jantri.component.html',
  styleUrls: ['./user-jantri.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserJantriComponent implements OnInit {
public utarArrayData:any[]=[];
public column:any[]=[]
public emptyJantri:any[]=[]

public columnTest:any[]=[]
public randoms:any[]=[];
public number:any;
public amount:any;
public ekdi_amount:null;
public dukdi_amount:null;
public tikri_amount:null;
public OddAmount:null;
public fromOdd:null;
public fromNumber:null;
public toNumber :null;
public fromToAmount:null;
public toOdd:null;
public Oddmount:null;
public fromEven:null;
public toEven:null;
public evenAmount:null;
public randomArrayData:any[]=[];
  public columnInput:any[]=[]
  firstColumn= null;
  public jodaAmount=null;
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
  EkdiDukdi: boolean;
  oddEvenPopup:boolean;
  randomIsOpen:boolean
  @ViewChildren('inputs') inputs;
  jantriUserId: string;
  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'F4')
    {
alert("f3") 
this.randomIsOpen = true
}


  }
  constructor(private toaster : ToastrService,public cookieService: CookieService,public service: UserJantriService,) { }


 


  ngOnInit(): void {
    this.jantriUserId = this.cookieService.get('userID');
    this.domEles = document.querySelectorAll('.container > *');
    this.length = this.domEles.length;
    
    this.column=this.getEmpntyJantri()
    //const arr = [ { 'name': 'P1', 'value': 150 }, { 'name': 'P1', 'value': 150 }, { 'name': 'P2', 'value': 200 }, { 'name': 'P3', 'value': 450 } ];
     const arr = [ { 1:  150 }, { 2: 150 }, {3 : 200 }, { 1: 450 } ];
// const res = Array.from(arr.reduce(
//   (m, {name, value}) => m.set(name, (m.get(name) || 0) + value), new Map
// ), ([name, value]) => ({name, value}));

console.log('onloadData',this.column);


//this.setJoda()
  }


  
  length: 0;
  domEles;
  moveCell(e){
    const activeEle = document.activeElement;
    const activeEleIndex = Array.prototype.indexOf.call(this.domEles, activeEle);
    if(e.key == "ArrowRight" && activeEleIndex < this.length - 1 ) {
      activeEleIndex.focus();
    } 

    if(e.key == "ArrowLeft" && activeEleIndex > 0) {
      activeEleIndex.focus();
      
    }
  }

  
  

  getEmpntyJantri(){
    this.emptyJantri=
    [{
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
      
    }]
    return this.emptyJantri
  }
  private startsWithAt(control: FormControl) {
    console.log('sfsdfsdfsdfsdfsdfsdfs',control);
    
    if (control.value.charAt(0) !== '@') {
        return {
            'startsWithAt@': true
        };
    }
  
    return null;
  }
  must_be_number(evt){
    alert('validation call')
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      alert('validation call false')
        return false;
    }
    return true;
  }

  getRowTotal(index:number){
   // console.log('sdfsdf',this.column[0]['number'][index].values);
  
    return this.column[0]['number'][index].values.map((a)=> {return a[a.val]}).reduce((a,b)=> {return Number(a) +Number(b)})
    }
    getFirstColumnTotal(){
   this.firstColumn=[this.column[0]['number'][0].values[0]["1"],this.column[0]['number'][1].values[0]["11"],this.column[0]['number'][2].values[0]["21"],this.column[0]['number'][3].values[0]["31"],this.column[0]['number'][4].values[0]["41"],this.column[0]['number'][5].values[0]["51"],this.column[0]['number'][6].values[0]["61"],this.column[0]['number'][7].values[0]["71"],this.column[0]['number'][8].values[0]["81"],this.column[0]['number'][9].values[0]["91"]].reduce((a,b)=> {return Number(a) +Number(b)})
   return this.firstColumn
   // this.firstColumn
  }
  getSecondColumnTotal(){
   this.secondColumn= [this.column[0]['number'][0].values[1]["2"],this.column[0]['number'][1].values[1]["12"],this.column[0]['number'][2].values[1]["22"],this.column[0]['number'][3].values[1]["32"],this.column[0]['number'][4].values[1]["42"],this.column[0]['number'][5].values[1]["52"],this.column[0]['number'][6].values[1]["62"],this.column[0]['number'][7].values[1]["72"],this.column[0]['number'][8].values[1]["82"],this.column[0]['number'][9].values[1]["92"]].reduce((a,b)=> {return Number(a) +Number(b)}) 
   
    return this.secondColumn
    //this.secondColumn
  }
  getThirdColumnTotal(){
    this.thirdColumn= [this.column[0]['number'][0].values[2]["3"],this.column[0]['number'][1].values[2]["13"],this.column[0]['number'][2].values[2]["23"],this.column[0]['number'][3].values[2]["33"],this.column[0]['number'][4].values[2]["43"],this.column[0]['number'][5].values[2]["53"],this.column[0]['number'][6].values[2]["63"],this.column[0]['number'][7].values[2]["73"],this.column[0]['number'][8].values[2]["83"],this.column[0]['number'][9].values[2]["93"]].reduce((a,b)=> {return Number(a) +Number(b)})
     return this.thirdColumn
     //this.thirdColumn
  }
  getFourthColumnTotal(){
    this.fourthColumn=[this.column[0]['number'][0].values[3]["4"],this.column[0]['number'][1].values[3]["14"],this.column[0]['number'][2].values[3]["24"],this.column[0]['number'][3].values[3]["34"],this.column[0]['number'][4].values[3]["44"],this.column[0]['number'][5].values[3]["54"],this.column[0]['number'][6].values[3]["64"],this.column[0]['number'][7].values[3]["74"],this.column[0]['number'][8].values[3]["84"],this.column[0]['number'][9].values[3]["94"]].reduce((a,b)=> {return Number(a) +Number(b)})
    return this.fourthColumn
    // this.fourthColumn
  }
  getFifthColumnTotal(){
   this.fifthColumn= [this.column[0]['number'][0].values[4]["5"],this.column[0]['number'][1].values[4]["15"],this.column[0]['number'][2].values[4]["25"],this.column[0]['number'][3].values[4]["35"],this.column[0]['number'][4].values[4]["45"],this.column[0]['number'][5].values[4]["55"],this.column[0]['number'][6].values[4]["65"],this.column[0]['number'][7].values[4]["75"],this.column[0]['number'][8].values[4]["85"],this.column[0]['number'][9].values[4]["95"]].reduce((a,b)=> {return Number(a) +Number(b)})
    return this.fifthColumn
    //this.fifthColumn
  }
  getSixthColumnTotal(){
    this.sixthColumn=[this.column[0]['number'][0].values[5]["6"],this.column[0]['number'][1].values[5]["16"],this.column[0]['number'][2].values[5]["26"],this.column[0]['number'][3].values[5]["36"],this.column[0]['number'][4].values[5]["46"],this.column[0]['number'][5].values[5]["56"],this.column[0]['number'][6].values[5]["66"],this.column[0]['number'][7].values[5]["76"],this.column[0]['number'][8].values[5]["86"],this.column[0]['number'][9].values[5]["96"]].reduce((a,b)=> {return Number(a) +Number(b)})
    return this.sixthColumn
    // this.sixthColumn
  }
  getSeventhColumnTotal(){
    this.seventhColumn=[this.column[0]['number'][0].values[6]["7"],this.column[0]['number'][1].values[6]["17"],this.column[0]['number'][2].values[6]["27"],this.column[0]['number'][3].values[6]["37"],this.column[0]['number'][4].values[6]["47"],this.column[0]['number'][5].values[6]["57"],this.column[0]['number'][6].values[6]["67"],this.column[0]['number'][7].values[6]["77"],this.column[0]['number'][8].values[6]["87"],this.column[0]['number'][9].values[6]["97"]].reduce((a,b)=> {return Number(a) +Number(b)})
    return this.seventhColumn
    //this.seventhColumn
  }
  getEighthColumnTotal(){
    this.eighthColumn= [this.column[0]['number'][0].values[7]["8"],this.column[0]['number'][1].values[7]["18"],this.column[0]['number'][2].values[7]["28"],this.column[0]['number'][3].values[7]["38"],this.column[0]['number'][4].values[7]["48"],this.column[0]['number'][5].values[7]["58"],this.column[0]['number'][6].values[7]["68"],this.column[0]['number'][7].values[7]["78"],this.column[0]['number'][8].values[7]["88"],this.column[0]['number'][9].values[7]["98"]].reduce((a,b)=> {return Number(a) +Number(b)})
     return this.eighthColumn
     //this.eighthColumn
  }
  getNinthColumnTotal(){
    this.ninthColumn= [this.column[0]['number'][0].values[8]["9"],this.column[0]['number'][1].values[8]["19"],this.column[0]['number'][2].values[8]["29"],this.column[0]['number'][3].values[8]["39"],this.column[0]['number'][4].values[8]["49"],this.column[0]['number'][5].values[8]["59"],this.column[0]['number'][6].values[8]["69"],this.column[0]['number'][7].values[8]["79"],this.column[0]['number'][8].values[8]["89"],this.column[0]['number'][9].values[8]["99"]].reduce((a,b)=> {return Number(a) +Number(b)})
     return this.ninthColumn
     // this.ninthColumn
  }
  getTenthColumnTotal(){
   this.tenthColumn= [this.column[0]['number'][0].values[9]["10"],this.column[0]['number'][1].values[9]["20"],this.column[0]['number'][2].values[9]["30"],this.column[0]['number'][3].values[9]["40"],this.column[0]['number'][4].values[9]["50"],this.column[0]['number'][5].values[9]["60"],this.column[0]['number'][6].values[9]["70"],this.column[0]['number'][7].values[9]["80"],this.column[0]['number'][8].values[9]["90"],this.column[0]['number'][9].values[9]["100"]].reduce((a,b)=> {return Number(a) +Number(b)})
    return this.tenthColumn
    //this.tenthColumn
  }
  getEleventhColumnTotal(){
    
    this.eleventhColumn= [this.firstColumn,this.secondColumn,this.thirdColumn,this.fourthColumn,this.fifthColumn,this.sixthColumn,this.seventhColumn,this.eighthColumn,this.ninthColumn,this.tenthColumn].reduce((a,b)=> {return a +b ;})
    return this.eleventhColumn
  }
  getBaharTotal(){
     this.baharColumn =[this.column[0]['bahar'][0]["B1"],this.column[0]['bahar'][1]["B2"],this.column[0]['bahar'][2]["B3"],this.column[0]['bahar'][3]["B4"],this.column[0]['bahar'][4]["B5"],this.column[0]['bahar'][5]["B6"],this.column[0]['bahar'][6]["B7"],this.column[0]['bahar'][7]["B8"],this.column[0]['bahar'][8]["B9"],this.column[0]['bahar'][9]["B10"]].reduce((a,b)=> {return a +b ;})
     return this.baharColumn
     // this.baharColumn
  }
  getAnderTotal(){
    this.anderColumn= [this.column[0]['ander'][0]["A1"],this.column[0]['ander'][1]["A2"],this.column[0]['ander'][2]["A3"],this.column[0]['ander'][3]["A4"],this.column[0]['ander'][4]["A5"],this.column[0]['ander'][5]["A6"],this.column[0]['ander'][6]["A7"],this.column[0]['ander'][7]["A8"],this.column[0]['ander'][8]["A9"],this.column[0]['ander'][9]["A10"]].reduce((a,b)=> {return a +b ;})
    return this.anderColumn
    // this.anderColumn
  }
  grandTotalgrandTotal(){
    return
    //[this.eleventhColumn,this.baharColumn,this.anderColumn].reduce((a,b)=> {return a +b ;})
  }
  saveUserJantri(){
    let json= _.cloneDeep(this.changeIntoMainJson(this.column[0]))
   let finalData= json.map((item)=> { 
    delete item.val; 
    return item; 
});

   let data={
     jantriData:finalData,
     savedFrom:'J',
    userId:this.jantriUserId,
    shiftId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",

   }
    
  this.service.addUserJantri(data).then((data) => {
    debugger
    console.info('data', data);
    alert('ok')
  }).catch(error => {
    alert('ero')
    console.log(error);

  }) 

  }

  clearAllData(){
    this.column=this.getEmpntyJantri()
  }
  getSumOfSameKey(arr){
    const obj = arr.reduce((acc, ele) => {
      const [key, value] = Object.entries(ele)[0];
      acc[key] = acc[key] ? acc[key] + value : value;
      return acc;
    }, {});
    
   return Object.entries(obj).map(([key, value]) => ({ [key]: value }));
  }

  changeInToJson(array){
    let changeArray = {}
    for (let index = 0; index < array.length; index++) {

      if (this.checkKeyValue(array[index])) {
        if (!changeArray['number']) {
          changeArray['number'] = [];
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
          changeArray['number'].push({ values: [] })
        }

        for (let indexj = 0; indexj < changeArray['number'].length; indexj++) {
          if (changeArray['number'][indexj]['values'] && changeArray['number'][indexj]['values'].length < 10) {
            const [key, value] = Object.entries(array[index])[0];           
            changeArray['number'][indexj]['values'].push({[key]:value,val:key});
            break;
          }
        }
      } else if (this.checkKeyBaharValue(array[index])) {
        if (!changeArray['bahar']) {
          changeArray['bahar'] = [];
        }

        changeArray['bahar'].push(array[index]);
      } else {
        if (!changeArray['ander']) {
          changeArray['ander'] = [];
        }

        changeArray['ander'].push(array[index]);
      }

    }
    return changeArray
  }

  arrowKeyChange(event) {
    console.log('arrow', event.keyCode)
    $(document).on('keypress', 'input', function (e) {
      if (e.key ==  "ArrowRight") {
        const textboxes1 = $('input,');
        const currentBoxNumber1 = textboxes1.index(this);
        const nextBox1 = textboxes1[currentBoxNumber1 + 1]
        nextBox1[0].focus();
  
      }
  });
  }

  keytab(event) {
    $(document).on('keypress', 'input,select', function (e) {
      if (e.arrowup == 65) {
        const textboxes = $('input,select');
        const currentBoxNumber = textboxes.index(this);
        const nextBox = textboxes[currentBoxNumber + 1]
        nextBox.focus();
      
  
      }
      // }
  });
  }

  checkKeyValue(objectValue) {
    for (const [key] of Object.entries(objectValue)) {
      if (key.search('B') == -1 && key.search('A') == -1 && typeof (parseInt(key)) === 'number' && key !== 'val') {
        return true;
      }
    }
    return false;
  }
  checkKeyBaharValue(objectValue) {


    for (const [key] of Object.entries(objectValue)) {
      if (key.search('B') !== -1) {
        return true;
      }
    }
    return false;
  }
  changeIntoMainJson(changeArray){
    let a = []
    for (let index = 0; index < changeArray['number'].length; index++) {
      for (let indexj = 0; indexj < changeArray['number'][index]['values'].length; indexj++) {
        a.push(changeArray['number'][index]['values'][indexj])
        
      }
      
    }
    for (let index = 0; index < changeArray['bahar'].length; index++) {
        a.push(changeArray['bahar'][index])  
    }
    for (let index = 0; index < changeArray['ander'].length; index++) {
        a.push(changeArray['ander'][index])  
    }
    return a
  }
  setUtarNumber():any{
    const NumberValid = ["00","111","222","333","444","555","666","777","888","999","000","1111","2222","3333","4444","5555","6666","7777","8888","9999","0000"];
    for(let i=1; i<=100; i++){
      if(i<10){
        NumberValid.push("0"+i);
      }
      NumberValid.push(""+i);
    }


    if((this.number ==null || this.number == 0) && Math.round( this.amount) != null){
      this.toaster.warning("Invalid Number","Please enter a valid number!");
      
      
      
    }else if(this.number !=null && (Math.round( this.amount) == null || Math.round( this.amount) == 0) ){
      this.toaster.warning("Invalid Amount","Please enter a valid Amount!");   
      
      
    }else if(this.number !=null && (this.amount !=null || Math.round(this.amount) == 0)){
  
      if(!NumberValid.includes(""+this.number)){
        this.toaster.warning("Invalid Number","Please enter a valid number!");
        
        
      }else{
        this.utarArrayData.unshift({number:this.number== '00' ? 100 : this.number,amount:this.amount})
        this.number=null;
        this.amount=null;
      }
    
    //   tmpUtarArr.unshift({
    //         Number: ((_Number.val()=="00") ? "100" : (_Number.val().length == 2 ? parseInt(_Number.val()) : _Number.val()) ),
    //         Amount: _Amount.val(),
    //       });
    //   _Number.val("");
    //   _Amount.val("");
    //   _Number.focus();
    //   BindViewPanel(tmpUtarArr);
      
    // }
    // if(){
    //   this.utarArrayData.unshift({number:this.number== '00' ? 100 : this.number,amount:this.amount})
    // }
console.log('utardata',this.utarArrayData)
  }
}

setJoda():any{
  
  let jodaData=[]
  if(Math.round(this.jodaAmount)== null){ 
		
    this.toaster.warning("Invalid Amount","Please enter a valid Amount!");
		return false;
	}else{
		
		
		for(var i=0; i<=9; i++)
		{
			let no = i+''+i;
     let number = no == '00' ? 100 : Number(no)
			jodaData.push({ [number] : Number(this.jodaAmount)})
			
		}
   
    let mainJson=this.changeIntoMainJson(this.column[0]);
    Array.prototype.push.apply(mainJson,jodaData)

let sumofJoda=this.getSumOfSameKey(mainJson)
this.column[0]=this.changeInToJson(sumofJoda)
    this.jodaAmount=null;
  
	}
}
cancelJoda(){
  this.jodaAmount=null;
}

checkRandomNumber(enteredNumber:any):any{
  let NumberValid = ["00","111","222","333","444","555","666","777","888","999","000","1111","2222","3333","4444","5555","6666","7777","8888","9999","0000"];
	for(var i=1; i<=100; i++){
		if(i<10){
			NumberValid.push("0"+i);
		}
		NumberValid.push(""+i);
	}
  
  if(!NumberValid.includes(""+enteredNumber)){
    this.toaster.warning("Invalid Number","Please enter a valid number!");
    
    
  }else{
    this.randomArrayData[this.randomArrayData.length-1]['number']=  enteredNumber=enteredNumber== '00' ? '100' : enteredNumber;
    this.randomArrayData.unshift({number:null,amount:null})
   
  }


}
getRandomNumberTotal(numbertAmount:any):any{

  let result = this.randomArrayData.map(function(el) {
    var o = Object.assign({}, el);
    o.amount = numbertAmount;
    return o;
  })
 let numberTotal= Array.from(result.reduce(
    (m, {name, amount}) => m.set(name, (m.get(name) || 0) + amount), new Map
  ), ([name, amount]) => ({name, amount}));
  console.log(numberTotal);
}
reverseNumber(){
  let Numbers
  for (var i = 0; i <Numbers.length; i++) {
    var NumberElement = Numbers[i];
    var _number = NumberElement.value;
    if(_number!="")
    {
      var _NumberSplit = (_number.trim());
      var digitFirst = _NumberSplit[0];
      var digitTwo = _NumberSplit[1];
      //alert(digitTwo);
      if(digitFirst != digitTwo && _number.toString().length <=2 ){
        var newNumber = "";
        if(digitTwo === undefined){
          newNumber = digitFirst+'0';
        }else{
          newNumber = digitTwo+''+digitFirst;
        }
       let GenrateNumberArr = {
          Number: (newNumber=="00" ? "100" : (newNumber.length == 2 ? parseInt(newNumber): newNumber)),
          Amount: 'KeyAmountPlt',
        }; 
        
      }
    }
  }
}
fromToNumber(){
  let jodaData=[]
  for(let i=Math.round(this.fromNumber); i<=Math.round(this.toNumber); i++)
	{

    
    
    let number =i==0 ? 100:i
     jodaData.push({ [number] : Number(this.fromToAmount)})
				
	}
  this.fromNumber=null;
  this.toNumber=null;
  this.fromToAmount=null;
 
  let mainJson=this.changeIntoMainJson(this.column[0]);
    Array.prototype.push.apply(mainJson,jodaData)

let sumofJoda=this.getSumOfSameKey(mainJson)
this.column[0]=this.changeInToJson(sumofJoda)
  console.log('from to array',jodaData)
}
closeFromTo(){
  this.fromNumber=null;
  this.toNumber=null;
  this.fromToAmount=null;
}


oddEven(){
  let jodaData=[]
  for(let i=Math.round(this.fromOdd); i<=Math.round(this.toOdd); i++){	
    let isOdd =  i % 2;
    if(isOdd==1) {
      let _number = i;
      let number =_number==0 ? 100:_number
      jodaData.push({ [number] : Number(this.OddAmount)})
      // oddEvenArray.push({
      //   Number: _number==0 ? 100:_number,
      //   Amount: this.OddAmount,
      // })
      
    }
  }

  for(var i=Math.round(this.fromEven); i<=Math.round(this.toEven); i++){	
    var isOdd =  i % 2;
    if(isOdd==0) {
      var _number = i;
      let number =_number==0 ? 100:_number
      jodaData.push({ [number] : Number(this.evenAmount)})
      // oddEvenArray.push({
      //   Number: _number==0 ? 100 : _number,
      //   Amount:this.evenAmount,
      // }) 
      
    }
  }


  this.oddEvenPopup=false;
  this.fromOdd=null;
  this.toOdd=null;
  this.OddAmount=null;
  this.fromEven=null;
  this.toEven=null;
  this.evenAmount=null;
  let mainJson=this.changeIntoMainJson(this.column[0]);
  Array.prototype.push.apply(mainJson,jodaData)

let sumofJoda=this.getSumOfSameKey(mainJson)
this.column[0]=this.changeInToJson(sumofJoda)
  
}
closeOddEven(){
  this.oddEvenPopup=false;
  this.fromOdd=null;
  this.toOdd=null;
  this.OddAmount=null;
  this.fromEven=null;
  this.toEven=null;
  this.evenAmount=null;
}
setEkdiDukdi(){

  let jodaData = [];
  if( Math.round(this.ekdi_amount) != null ){ 
    
    
    for(let i=1; i<=100; i++)
    {
      jodaData.push({ [i] : Number(this.ekdi_amount)})
      // ekdiDukdiTikdiArray.push({
      //   Number: i,
      //   Amount: this.ekdi_amount,
      // }); 
      i+=2;
      
    }
    
  }
  if( Math.round(this.dukdi_amount) != null ){ 
   
    for(let i=2; i<=100; i++)
    {

      jodaData.push({ [i] : Number(this.dukdi_amount)})
      // ekdiDukdiTikdiArray.push({
      //   Number: i,
      //   Amount: this.dukdi_amount,
      // }); 
      i+=2;
      
    }
    
  }
  if( Math.round(this.tikri_amount) != null ){ 
  
    for(var i=3; i<=100; i++)
    {
      jodaData.push({ [i] : Number(this.tikri_amount)})
      // ekdiDukdiTikdiArray.push({
      //   Number: i,
      //   Amount: this.tikri_amount,
      // }) 
      i+=2;
        
    }
    
  }
 
  let mainJson=this.changeIntoMainJson(this.column[0]);
  Array.prototype.push.apply(mainJson,jodaData)

let sumofJoda=this.getSumOfSameKey(mainJson)
this.column[0]=this.changeInToJson(sumofJoda)
  
  
}
clearEkdiDukdi(){
  this.ekdi_amount=null;
  this.dukdi_amount=null;
  this.tikri_amount=null;
  
}
openEkdiDukdi(){
  this.EkdiDukdi=true
}
checkDoubleEnter(event){
  console.log('enter event',event);
  

}

}
