import { Component, Input, OnInit } from '@angular/core';
import { ExampleData } from '../../../services/example-data/example-data';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input()
  eventCard: ExampleData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
