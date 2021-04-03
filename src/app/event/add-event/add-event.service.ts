import { Injectable } from '@angular/core';
import { MenuButton } from '../../dropdown-menu/menu-button/menu-button';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  private _buttonConfig: MenuButton = {
    icon: './assets/img/calendar.svg',
    text: 'Add new event',
    openIcon: true,
  };

  private _menuConfig: MenuButton[] = [
    {
      icon: './assets/img/museum.svg',
      text: 'Place',
      type: 'place'
    },
    {
      icon: './assets/img/hotel.svg',
      text: 'Hotel',
      type: 'hotel'
    },
    {
      icon: './assets/img/car.svg',
      text: 'Car',
      type: 'car-rental'
    }
  ];

  getButtonConfig() {
    return this._buttonConfig;
  }

  getMenuConfig() {
    return this._menuConfig;
  }
}
