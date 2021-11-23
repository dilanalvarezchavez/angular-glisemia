import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CrudUserComponent } from './components/crud-user/crud-user.component';
import { CrudDateUserComponent } from './components/crud-date-user/crud-date-user.component';


import { app_roouting } from './app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrudUserComponent,
    CrudDateUserComponent
  ],
  imports: [
    BrowserModule,
    app_roouting, 
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
