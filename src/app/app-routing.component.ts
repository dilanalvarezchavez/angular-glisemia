import { Component } from "@angular/core";
import {  RouterModule,Routes} from "@angular/router";
import { CrudUserComponent } from "./components/crud-user/crud-user.component";
import { CrudDateUserComponent } from "./components/crud-date-user/crud-date-user.component";
import { LoginComponent } from "./components/login/login.component";



export const routes: Routes = [

{ path: 'login', component: LoginComponent },
{ path: 'crud-user', component: CrudUserComponent },
{ path: 'crud-date-user', component: CrudDateUserComponent },
    { path: '', pathMatch: 'full', redirectTo: './login.component.html' },
]

export const app_roouting=RouterModule.forRoot(routes); 