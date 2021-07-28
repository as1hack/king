import { Injectable } from '@angular/core';
/* Http and Header */
import { HttpClient, HttpHeaders } from '@angular/common/http';
// ustils
import { UtilsService } from '../../services/utils.service';
// rxjs
import {shareReplay } from 'rxjs/operators'
import {catchError } from 'rxjs/operators'
import {Observable,throwError } from 'rxjs'
import { map } from 'rxjs/operators';


/* map and Promise */



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl= new UtilsService().baseUrl
  constructor(private http: HttpClient, public utils:UtilsService) { }


  roleList(){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/GetAll?pageIndex=0&pageSize=10').subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
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

  createGetMenu(){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/Create').subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
  getMenu(id:string){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Menu/GetByRoleId?roleId=' + id).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
  deleteMenu(json:any){
    return new Promise((resolve,reject) => {
      const headers = new HttpHeaders()
                   .set('Content-Type', 'application/json');
      
      this.http.post(this.baseUrl + 'Menu/UpdateRecordState',json,{headers:headers}).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
  updateMenu(data:any): Observable<any[]>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + 'token')
  //   const headers = new Headers();
  // headers.append('Content-Type', 'application/json');
  // const options = new RequestOptions({ headers: headers });
    // return this.http.post(this.baseUrl + 'Role/UpdateRecordState', data ,{headers:headers}).toPromise()
  
    return this.http.post<any[]>(this.baseUrl + 'Menu/Update', data  ,{headers:headers})
   
     
  }


  create(menuInfo:any){
  
    
   

    const header= new HttpHeaders({'Content-Type': 'application/json'})
     const headers = new HttpHeaders()
                 .set('Content-Type', 'application/json');
    
  //                return new Promise((resolve) => {
  //   this.http.post(this.baseUrl + 'Role/Create',  roleInfo).pipe(map(data => {})).subscribe(result => {
  //     console.log(result);

      
  //   });
  // })

 

  return new Promise((resolve,reject) => {
    const headers = new HttpHeaders()
                 .set('Content-Type', 'application/json');
    this.http.post(this.baseUrl + 'Menu/Create',menuInfo,  { headers: header }).subscribe(data => {
      alert('success api')
      resolve(data);
    }, error => {
      alert('error api')
      
      reject(error);
   })

  })

    // const header= new HttpHeaders({'Content-Type': 'application/json'})
    //  const headers = new HttpHeaders()
    //              .set('Content-Type', 'application/json');
    
    // return this.http.post(this.baseUrl + 'Role/Create',  roleInfo,{headers}).pipe(shareReplay())
    
    //   }
}

}
