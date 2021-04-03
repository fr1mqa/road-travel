import { Component, Input, OnInit } from '@angular/core';
import { ExampleData } from '../../../services/example-data/example-data';

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input()
  eventCard: ExampleData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
