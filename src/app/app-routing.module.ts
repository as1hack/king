import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { AuthService } from './services/auth.service';
import { ShiftListComponent } from './Shift/shift-list/shift-list.component';
import { TimerComponent } from './timer/timer.component';
import { UserListComponent } from './User/user-list/user-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
 
  {
    path: 'shift',
    component: ShiftListComponent,    

  },
  { path: 'login', component: LoginComponent },
  { path: 'time', component: TimerComponent },
  { path: 'user', component: UserListComponent,canActivate: [AuthService] },
  { path: 'menu', component: MenuListComponent,canActivate: [AuthService] },
  { path: 'role', component: RoleListComponent,canActivate: [AuthService]  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
