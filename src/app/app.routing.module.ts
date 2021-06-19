import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressComponentComponent } from "./home/address-component/address-component.component";
import { CountryComponentComponent } from "./home/country-component/country-component.component";
import { HomeComponent } from "./home/home.component";
import { SideNavComponent } from "./home/side-nav/side-nav.component";
import { StateComponentComponent } from "./home/state-component/state-component.component";
import { EditUserComponentComponent } from "./home/users-component/edit-user-component/edit-user-component.component";
import { UsersComponentComponent } from "./home/users-component/users-component.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.compnent";


const routes: Routes = [

    { path:"login" , component : LoginComponent   },
    { path:"register",component:RegisterComponent  },
    {path:"home"  , component:HomeComponent },
    { path: "users", component: UsersComponentComponent },
    { path:"users/:id",component:EditUserComponentComponent },
    { path:"address",component:AddressComponentComponent },
    { path:"state",component:StateComponentComponent },
    { path:"country",component: CountryComponentComponent},
    {path:"",redirectTo:"/users",pathMatch:"full"},
    {path:"**",redirectTo:"/login"}
   
];

@NgModule({ 
    imports: [
       RouterModule.forRoot(routes)
    ],
    exports: [RouterModule] 
 }) 

export class AppRoutingModule {

 }