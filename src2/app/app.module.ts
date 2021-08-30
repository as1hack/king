import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
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
// import { HttpClientModule } from '@angular/common/http';
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
<<<<<<< HEAD
// import { BrowserModule } from 'node_modules2/@angular/platform-browser/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import { UserJantriComponent } from './jantri/user-jantri/user-jantri.component';
import { TransactionComponent } from './transaction/transaction.component';
=======
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
>>>>>>> 9b1e9bbbb1af3b13370e79fec1b6f6cd3131c2e0
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
<<<<<<< HEAD
    JantriListComponent,
    RolePermissionComponent,
    UserJantriComponent,
    TransactionComponent,
=======
    JantriListComponent
>>>>>>> 9b1e9bbbb1af3b13370e79fec1b6f6cd3131c2e0
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // HttpClientModule,
    HttpClientModule,

    BrowserAnimationsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
<<<<<<< HEAD
    // NgbModule,
    ToastrModule.forRoot(),
    NgbModule,
    UiSwitchModule,
=======
    NgbModule,
    ToastrModule.forRoot(),
    NgbModule,
>>>>>>> 9b1e9bbbb1af3b13370e79fec1b6f6cd3131c2e0
    
  ],
  providers: [UtilsService,RoleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
