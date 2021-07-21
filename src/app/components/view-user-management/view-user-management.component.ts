import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  stationname: string;
  email: string;
  role: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { email: 'jeranyamad@gmail.com',role: 'Local User',stationname: 'Selbourne'},
  { email:'adm1@admin.example.com',role: 'Administrator',stationname: ''},
  { email:'test1@admin.example.com',role: 'Administrator',stationname: ''},
  { email:'deone101@gmail.com',role: 'Local User',stationname: 'Total'},

];

@Component({
  selector: 'app-view-user-management',
  templateUrl: './view-user-management.component.html',
  styleUrls: ['./view-user-management.component.css']
})

export class ViewUserManagementComponent {
    displayedColumns: string[] = ['email','role', 'stationname'];
    dataSource = ELEMENT_DATA;

  }





