import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService) { }


  addUser(user: any) {
    return this.http.post(this.baseUrl + 'User/Create', user, { headers: this.utils.createHeader() }).toPromise();
  }

  createGetUser(){
    return new Promise((resolve,reject) => {
       this.http.get(this.baseUrl + 'User/Create').subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
     })
  
    }) 
  }
  // userList(){
  //   return new Promise((resolve,reject) => {
  //         this.http.get(this.baseUrl + 'User/GetAll?pageIndex=0&pageSize=10').subscribe(data => {
        
  //       resolve(data);
  //     }, error => {
        
        
  //       reject(error);
  //    })
  
  //   })
  // }

  user(event:any) {
    return this.http.get(this.baseUrl + 'User/GetAll?pageIndex=' +event.pageIndex+ '&pageSize='+ event.pageSize,
    { headers: this.utils.createHeader() }).toPromise();
  }


  updateUser(user : any){
    return this.http.patch(this.baseUrl + 'User/Update', user, { headers: this.utils.createHeader() }).toPromise();
  }

  deleteUser(json:any){
    return new Promise((resolve,reject) => {
      const headers = new HttpHeaders()
                   .set('Content-Type', 'application/json');
      
      this.http.post(this.baseUrl + 'User/UpdateRecordState',json,{headers:headers}).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }


}
