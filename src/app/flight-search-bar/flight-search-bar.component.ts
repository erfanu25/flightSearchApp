import { Component, OnInit } from '@angular/core';
import {Flight} from './services/domain/flight.domain';
import {FlightService} from './services/service-api/flight.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-flight-search-bar',
  templateUrl: './flight-search-bar.component.html',
  styleUrls: ['./flight-search-bar.component.css']
})
export class FlightSearchBarComponent implements OnInit {

  constructor(
    private flightService: FlightService,
    private formBuilder: FormBuilder) { }

  flights: Flight[];
  flightSearchForm: FormGroup;

  ngOnInit(): void {
    this.prepareFlightSearchForm();
    // this.flights = [
    //   {
    //     AirlineLogoAddress:
    //       'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif',
    //     AirlineName: 'China Southern Airlines',
    //     InboundFlightsDuration: '24:10',
    //     ItineraryId: '',
    //     OutboundFlightsDuration: '26:20',
    //     Stops: 2,
    //     TotalAmount: 2903.84
    //   }
    // ];

  }

  prepareFlightSearchForm() {
    this.flightSearchForm = this.formBuilder.group({
      DepartureAirportCode: ['', Validators.required],
      ArrivalAirportCode: ['', Validators.required],
      DepartureDate: [''],
      ReturnDate: ['']
    });
  }

  getFlightList() {
    this.flightSearchForm.markAllAsTouched();

    if (this.flightSearchForm.valid) {
      let urlQueryParams = new Map();

      for (let control in this.flightSearchForm.controls) {
        urlQueryParams.delete(control);
        let formControlValue = (this.flightSearchForm.get(control).value).toString().trim();
        if (formControlValue.length !== 0) {
          urlQueryParams.set(control, this.flightSearchForm.get(control).value);
        }
      }

      this.flightService.getFlightList(urlQueryParams)
        .subscribe(flights => {
          this.flights = flights;
        });
    }
  }

}
