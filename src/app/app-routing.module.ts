import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerDetailsComponent } from './components/consumer-details/consumer-details.component';
import { CreateDetailsComponent } from './components/consumer-details/create-details/create-details.component';
import { ViewDetailsComponent } from './components/consumer-details/view-details/view-details.component';
import { UpdateDetailsComponent } from './components/consumer-details/update-details/update-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreatePropertyDetailsComponent } from './components/create-property-details/create-property-details.component';
import { ViewPropertyDetailsComponent } from './components/view-property-details/view-property-details.component';
import { UpdatePropertyDetailsComponent } from './components/update-property-details/update-property-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'consumer-details', component: ConsumerDetailsComponent },
  { path:'consumer-details/create', component: CreateDetailsComponent },
  { path:'consumer-details/view/:id', component: ViewDetailsComponent },
  { path:'consumer-details/update/:id', component: UpdateDetailsComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'consumer-details/create-property', component: CreatePropertyDetailsComponent},
  { path:'consumer-details/update-property', component: UpdatePropertyDetailsComponent },
  { path:'consumer-details/view-property/:cid/:id', component: ViewPropertyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
