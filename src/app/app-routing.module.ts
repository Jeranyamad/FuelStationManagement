import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { ViewUserManagementComponent } from './components/view-user-management/view-user-management.component';
import { FuelStationsComponent } from './components/fuel-stations/fuel-stations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {
    path: '',redirectTo: 'login', pathMatch: 'full',
    //path: '',component: DashboardComponent,
  },
  {
    path: 'table', component: ViewUserManagementComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'profile', component: ProfileComponent,
  },
  {
    path: 'email-login', component: LoginComponent,
  },
  {
    path: 'fuel', component: FuelStationsComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
