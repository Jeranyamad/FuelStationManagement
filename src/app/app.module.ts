import { AuthService } from './services/auth.service';
import { AccountService } from 'src/app/services/account.service';
import { AlertService } from './services/alert.service';

import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DefaultModule } from './layouts/default/default.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FuelStationsComponent } from './components/fuel-stations/fuel-stations.component';
import { ViewUserManagementComponent } from './components/view-user-management/view-user-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { CreateuserComponent } from './components/createuser/createuser.component';

// import { FuelStationsService } from './services/fuel-stations.service';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './profile/profile.component';


const firebaseConfig = {

    apiKey: "AIzaSyAcZrkuJ7fo1bU-EtbpLjHIc5oXbQr4coU",
    authDomain: "get-fuel-b537f.firebaseapp.com",
    projectId: "get-fuel-b537f",
    storageBucket: "get-fuel-b537f.appspot.com",
    messagingSenderId: "825192248977",
    appId: "1:825192248977:web:a80a1d136216bab1f27130",
    measurementId: "G-1RWJZN1TPL"
}
@NgModule({
  declarations: [
    AppComponent,
    FuelStationsComponent,
    ViewUserManagementComponent,
    DashboardComponent,
    TableComponent,
    LoginComponent,
    NavComponent,
    SignupComponent,
    AlertComponent,
    EmailComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, 'GetFuel'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    DefaultModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatIconModule,
    MatFormFieldModule,
    AngularFireAuthModule,
    FormsModule,


  ],
  // providers: [FuelStationsService],
  providers: [ AngularFirestore, AlertService, AccountService, FormBuilder,FormGroup,Validators],

  bootstrap: [AppComponent]
})
export class AppModule {

}
