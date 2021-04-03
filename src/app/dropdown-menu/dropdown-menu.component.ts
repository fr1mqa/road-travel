import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuButton } from './menu-button/menu-button';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent {

  toggle = false;
  @Input()
  items: MenuButton[];
  @Output()
  selectEvent: EventEmitter<MenuButton> = new EventEmitter<MenuButton>();

}
