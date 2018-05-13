import { Assignment2Component } from './assignment2/assignment2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Assignment1Module } from './assignment1/assignment1.module';
import { Assignment2Module } from './assignment2/assignment2.module';
import { Assignment3Module } from './assignment3/assignment3.module';
import { Assignment4Module } from './assignment4/assignment4.module';
import { Assignment5Module } from './assignment5/assignment5.module';
import { Assignment6Module } from './assignment6/assignment6.module';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Assignment1Module,
    Assignment2Module,
    Assignment3Module,
    Assignment4Module,
    Assignment5Module,
    Assignment6Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
