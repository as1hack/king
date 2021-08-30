import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService) { }

  createHeader() {
    let headers = new HttpHeaders();
  
  
  
    // headers = headers.set('content-type', 'application/json');
  
    let token = localStorage.getItem("token");
    /*if access token is set then append it to headers of api */
    if (token) {
  
      // let token1 = JSON.parse(token).access_token;      
      headers = headers.set('Authorization', 'Bearer ' + token)
      // header.append('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  addUser(user: any) {
    return this.http.post(this.baseUrl + 'User/Create', user, { headers: this.utils.createHeader() }).toPromise();
  }

  createGetUser(){
    return new Promise((resolve,reject) => {
       this.http.get(this.baseUrl + 'User/Create',{headers:this.utils.createHeader()}).subscribe(data => {
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
      
      this.http.post(this.baseUrl + 'User/UpdateRecordState',json,{headers:this.utils.createHeader()}).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }


}
