import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { ConsumerDetailsComponent } from './components/consumer-details/consumer-details.component';
import { CreateDetailsComponent } from './components/consumer-details/create-details/create-details.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailsComponent } from './components/consumer-details/view-details/view-details.component';
import { UpdateDetailsComponent } from './components/consumer-details/update-details/update-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatePropertyDetailsComponent } from './components/create-property-details/create-property-details.component';
import { ViewPropertyDetailsComponent } from './components/view-property-details/view-property-details.component';
import { UpdatePropertyDetailsComponent } from './components/update-property-details/update-property-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsumerDetailsComponent,
    CreateDetailsComponent,
    HomeComponent,
    ViewDetailsComponent,
    UpdateDetailsComponent,
    DashboardComponent,
    CreatePropertyDetailsComponent,
    ViewPropertyDetailsComponent,
    UpdatePropertyDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
