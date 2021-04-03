import { Component, Input } from '@angular/core';
import { ControlButton } from './control-button';

@Component({
  selector: 'control-button',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css']
})
export class ControlButtonComponent {

  @Input()
  config: ControlButton;

}
