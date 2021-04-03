import { Component, Input, OnInit } from '@angular/core';
import { ExampleData } from '../../../services/example-data/example-data';

@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input()
  eventCard: ExampleData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
