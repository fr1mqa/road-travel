import { Component, Input, OnInit } from '@angular/core';
import { TimeSetting } from './time-setting';

@Component({
  selector: 'time-setting',
  templateUrl: './time-setting.component.html',
  styleUrls: ['./time-setting.component.css']
})
export class TimeSettingComponent implements OnInit {

  @Input()
  config: TimeSetting;
  @Input()
  time = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
