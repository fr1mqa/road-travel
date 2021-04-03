import { Component, OnInit } from '@angular/core';
import { TimeSetting } from './time-setting/time-setting';

@Component({
  selector: 'event-settings',
  templateUrl: './event-settings.component.html',
  styleUrls: ['./event-settings.component.css']
})
export class EventSettingsComponent implements OnInit {

  startEvent: TimeSetting;
  durationEvent: TimeSetting;
  startEventTime = 0;
  durationEventTime = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.startEvent = {
      title: 'Start time',
      caption: 'Event start time',
      mode: 'time',
    };
    this.startEventTime = 0;
    this.durationEvent = {
      title: 'Duration',
      caption: 'Choose event duration',
      mode: 'duration',
    };
    this.durationEventTime = 40;
  }

}
