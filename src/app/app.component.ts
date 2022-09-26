import { Component } from '@angular/core';
import { DataService } from './data.service';
import {MarsRover} from './marsRover.model';
import {Observable} from 'rxjs';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-nasa-api',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  public roverPictures$: Observable<MarsRover>;

  public requestedDate: Date = new Date('2021-06-21');

  constructor(private readonly dataService: DataService) {
  }

  getPictures(): void {
    this.roverPictures$ = this.dataService.getPictures(this.requestedDate);
  }
}
