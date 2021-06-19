import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.compnent';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { Routes } from '@angular/router';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { TopNavComponent } from './home/top-nav/top-nav.component';
import { UsersComponentComponent } from './home/users-component/users-component.component';
import { AddressComponentComponent } from './home/address-component/address-component.component';
import { StateComponentComponent } from './home/state-component/state-component.component';
import { CountryComponentComponent } from './home/country-component/country-component.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponentComponent } from './home/users-component/edit-user-component/edit-user-component.component';
import { HomeServices } from './services/home.service';
import { PhoneNumber } from './Pipe/phoneNumber';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SideNavComponent,
    TopNavComponent,
    UsersComponentComponent,
    AddressComponentComponent,
    StateComponentComponent,
    CountryComponentComponent,
    EditUserComponentComponent,
    PhoneNumber
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HomeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
