import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MenuButton } from '../../dropdown-menu/menu-button/menu-button';
import { AddEventService } from './add-event.service';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddEventComponent {

  buttonConfig: MenuButton = this._addEventService.getButtonConfig();
  menuItems: MenuButton[] = this._addEventService.getMenuConfig();
  @Output()
  addEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _addEventService: AddEventService) {
  }

}
