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
//  importing http module
import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ShiftListComponent } from './Shift/shift-list/shift-list.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { RoleService } from './services/Role/role.service';
import { InlineErrorMsgComponent } from './Common/inline-error-msg/inline-error-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuListComponent,
    ShiftListComponent,
    RoleListComponent,
    InlineErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [UtilsService,RoleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
