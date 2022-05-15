import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Flight} from '../domain/flight.domain';
import {Params} from '@angular/router';

@Injectable()
export class FlightService {

  constructor(private http: HttpClient) {

  }

  public getFlightList(urlSearchParams: Map<string, any>): Observable<Flight[]> {
    let queryParams: Params = {};
    if (urlSearchParams) {
      queryParams = this.setParameter(urlSearchParams);
    }
    return this.http.get<Flight[]>('https://nmflightapi.azurewebsites.net/api/flight', { params: queryParams });
  }

  private setParameter(routerParams: Params): HttpParams {
    let queryParams = new HttpParams();
    routerParams.forEach((value, key) => {
      queryParams = queryParams.set(key, value);
    });
    return queryParams;
  }

}
