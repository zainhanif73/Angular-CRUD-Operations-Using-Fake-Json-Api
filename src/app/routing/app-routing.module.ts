import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from '../authentication/auth-gaurd.service';
import { DashboardComponent } from '../student-dashboard/dashboard.component';
import { LoginComponent } from '../authentication/login/login.component';
import { LogoutComponent } from '../authentication/logout/logout.component';


const routes: Routes = [
  {path:"dashboard/student" , component:DashboardComponent,canActivate: [AuthGaurdService]},
  {path: 'logout' , component:LogoutComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:DashboardComponent, pathMatch:"full" , canActivate: [AuthGaurdService]},
  {path:"**" , redirectTo : 'login', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
