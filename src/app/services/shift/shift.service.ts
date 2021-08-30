import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  baseUrl= new UtilsService().baseUrl
  cookieService: any;

  constructor(private http: HttpClient, public utils:UtilsService) { }

  createHeader() {
    let headers = new HttpHeaders();
  
    let token = localStorage.getItem("token");
    /*if access token is set then append it to headers of api */
    if (token) {
  
      // let token1 = JSON.parse(token).access_token;      
      headers = headers.set('Authorization', 'Bearer ' + token)
      // header.append('Authorization', 'Bearer ' + token);
    }
    return headers;
  }
  shiftList(){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Shift/GetAll?pageIndex=0&pageSize=10',{ headers: this.utils.createHeader() }).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }

  // createShift(data:any): Observable<any[]>{
  //   let headers = new HttpHeaders();
  
  //   headers = headers.set('Authorization', 'Bearer ' + this.cookieService.get('token') )
  
  //   return this.http.post<any[]>(this.baseUrl + 'Shift/Create', data  ,{headers:this.utils.createHeader()})
   
     
  // }

  createShift(data:any){   
   
     const headers = new HttpHeaders()
              .set('Content-Type', 'application/json');
              return this.http.post(this.baseUrl + 'Shift/Create', data ,{headers:this.utils.createHeader()}).toPromise();
}

  getShift(){
    return new Promise((resolve,reject) => {
      // const headers = new HttpHeaders()
      //              .set('Content-Type', 'application/json');
      // ,  { headers: headers }
      this.http.get(this.baseUrl + 'Shift/Create',{ headers: this.utils.createHeader() }).subscribe(data => {
        
        resolve(data);
      }, error => {
        
        
        reject(error);
     })
  
    })
  }
}
