import { ViewUserManagementComponent } from './components/view-user-management/view-user-management.component';
import { FuelStationsComponent } from './components/fuel-stations/fuel-stations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  children: []
  },
  {
    path: 'table', component: ViewUserManagementComponent,
  },
  {
    path: 'fuel',
    component: FuelStationsComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
