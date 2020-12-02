import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from 'aws-exports';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadshippmentComponent } from './components/loadshippment/loadshippment.component';
import { HomeComponent } from './components/home/home.component';
import { T1Component } from './components/tables/t1/t1.component';
import { T2Component } from './components/tables/t2/t2.component';
import { T3Component } from './components/tables/t3/t3.component';
import { ResultComponent } from './components/tables/result/result.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    LoadshippmentComponent,
    HomeComponent,
    T1Component,
    T2Component,
    T3Component,
    ResultComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
