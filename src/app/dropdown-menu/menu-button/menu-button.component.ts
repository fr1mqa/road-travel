import { Component, Input } from '@angular/core';
import { MenuButton } from './menu-button';

@Component({
  selector: 'menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {

  @Input()
  config: MenuButton;

}
