import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ExampleData } from './example-data';

@Injectable({
  providedIn: 'root'
})
export class ExampleDataService {

  private readonly _exampleData: ExampleData[] = [
    {
      type: 'vehicle',
      title: 'Mercedes Benz',
      st: '2020-10-02T20:00',
      vehicle: {
        type: 'E Class',
        gearbox: 'A',
        ac: true,
      },
    },

    {
      type: 'hotel',
      title: 'Relais du Silence Aux Vieux Remparts',
      st: '2020-10-02T20:00',
      hotel: {
        rating: '8.5',
        starRating: 5,
        category: 'Premium Hotel',
      },
    },
    {
      type: 'place',
      title: 'Hyde-park',
      st: '2020-10-02T20:00',
      place: {
        category: 'Park',
      },
    },
  ];

  getExampleData() {
    return of(this._exampleData);
  }

  addEvent(type: string) {
    console.log('add', type);
  }

  deleteEvent(type: string) {
    console.log('remove', type);
  }

  updateEvent(type: string) {
    console.log('update', type);
  }

}
