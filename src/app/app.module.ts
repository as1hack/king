import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
// Routing
import { AppRoutingModule } from './app-routing.module';

// Componnent
import { AppComponent } from './app.component';
import { UtilsService } from './services/utils.service';
import { LoginComponent } from './Login/login/login.component';
import { ToastrModule } from 'ngx-toastr';
// import Tick from '@pqina/flip';

//  importing http module
import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ShiftListComponent } from './Shift/shift-list/shift-list.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { RoleService } from './services/Role/role.service';
import { InlineErrorMsgComponent } from './Common/inline-error-msg/inline-error-msg.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { TimerComponent } from './timer/timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { JantriListComponent } from './jantri/jantri-list/jantri-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuListComponent,
    ShiftListComponent,
    RoleListComponent,
    InlineErrorMsgComponent,
    UserListComponent,
    TimerComponent,
    JantriListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    NgbModule,
    ToastrModule.forRoot(),
    NgbModule,
    
  ],
  providers: [UtilsService,RoleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
