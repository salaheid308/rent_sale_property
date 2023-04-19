import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';


import { HousingService } from './services/housing-services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent,},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'user/login', component: UserLoginComponent},

  {path: '**', component: PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyDetailComponent,
      PropertyListComponent,
      UserRegisterComponent,
      UserLoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    TabsModule.forRoot(),
     ButtonsModule.forRoot(),
     BsDatepickerModule.forRoot(),
     BrowserAnimationsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
