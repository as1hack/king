import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { MenuListComponent } from './Menu/menu-list/menu-list.component';
import { RoleListComponent } from './Role/role-list/role-list.component';
import { ShiftListComponent } from './Shift/shift-list/shift-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
 
  {
    path: 'shift',
    component: ShiftListComponent,    

  },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuListComponent },
  { path: 'role', component: RoleListComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
