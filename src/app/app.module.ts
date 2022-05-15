import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightSearchBarComponent } from './flight-search-bar/flight-search-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {FlightService} from './flight-search-bar/services/service-api/flight.service';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ],
  providers: [
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
