import { Component } from '@angular/core';
import { ExampleDataService } from '../services/example-data/example-data.service';
import { Observable } from 'rxjs';
import { ExampleData } from '../services/example-data/example-data';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  exampleData$: Observable<ExampleData[]> = this._exampleDataService.getExampleData();

  constructor(private _exampleDataService: ExampleDataService) {
  }

  addEventHandler(type: string) {
    this._exampleDataService.addEvent(type);
  }

  deleteEventHandler(type: string) {
    this._exampleDataService.deleteEvent(type);
  }

  saveEventHandler(type: string) {
    this._exampleDataService.updateEvent(type);
  }

}
