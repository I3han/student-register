import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { NavTablesComponent } from './nav-tables/nav-tables.component';

import { FormControllService } from './form-controll.service';
import { FirstTableComponent } from './first-table/first-table.component';
import { SecondTableComponent } from './second-table/second-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    DetailFormComponent,
    NavTablesComponent,
    FirstTableComponent,
    SecondTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormControllService],
  bootstrap: [AppComponent]
})
export class AppModule { }
