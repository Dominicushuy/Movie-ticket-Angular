import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {HomeModule} from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule,
    AdminModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
