import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jaiBalaJi';
  public year
  public menuData:any
  constructor(public LoginService: LoginService) { }
  ngOnInit(): void {
    let d = new Date();
    this.year = d.getFullYear();
    
  }
  getMenu(id){
    this.LoginService.menu(id).then((data) => {
     this.menuData=data

    }).catch(error => {

      

    })
  }
  goToModule(event:any){

  }
}
