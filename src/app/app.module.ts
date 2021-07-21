
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FuelStationsComponent } from './components/fuel-stations/fuel-stations.component';
import { ViewUserManagementComponent } from './components/view-user-management/view-user-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
//import { StationManagementComponent } from './components/station-management/station-management.component';

//import { CreateuserComponent } from './components/createuser/createuser.component';

// import { FuelStationsService } from './services/fuel-stations.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';





@NgModule({
  declarations: [
    AppComponent,
    FuelStationsComponent,
    ViewUserManagementComponent,
    //StationManagementComponent,
    DashboardComponent,
    TableComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'GetFuel'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  // providers: [FuelStationsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
