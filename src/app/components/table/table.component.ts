import { Component } from '@angular/core';

export interface PeriodicElement {
  stationname: string;
  position: number;
  address: string;
  operatinghours: string;
  phonenumber: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, stationname: 'Selbourne', address: '1234 Selbourne', operatinghours: '6am to 7pm', phonenumber: 242567897},
  {position: 2, stationname: 'Cecil Branch', address: '5678 Cecil Avenue', operatinghours: '6am to 9pm', phonenumber: 2425123456 },
  {position: 3, stationname: 'Total', address: '963 Rekai Tangwena Rd', operatinghours: '7am to 10pm', phonenumber: 242789452 },
  {position: 4, stationname: 'Puma', address: '85 Rekai Tangwena Rd', operatinghours: '6am to 7pm', phonenumber: 242258963 },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  displayedColumns: string[] = ['position', 'stationname', 'address', 'operatinghours','phonenumber'];
  dataSource = ELEMENT_DATA;

}
