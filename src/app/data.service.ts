import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { apiKey } from './environment';
import {MarsRover} from './marsRover.model';
import {DatePipe} from '@angular/common';

@Injectable()
  export class DataService {

    constructor(private http: HttpClient, private datePipe: DatePipe) { }

    public getPictures(date: Date): Observable<MarsRover> {
      const requestedDate =  this.datePipe.transform(date, 'yyyy-MM-dd');
      const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + requestedDate + '&api_key=' + apiKey;
      return this.http.get<MarsRover>(url);
    }
  }
