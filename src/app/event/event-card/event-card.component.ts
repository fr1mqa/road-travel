import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlButton } from './control-button/control-button';
import { ExampleData } from '../../services/example-data/example-data';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  edit = false;
  changeButton: ControlButton;
  deleteButton: ControlButton;
  cancelButton: ControlButton;
  saveButton: ControlButton;
  @Output()
  saveEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  eventCard: ExampleData;

  constructor() {
  }

  ngOnInit(): void {
    this.changeButton = {
      imgSrc: './assets/img/edit.svg',
      text: 'Change',
      buttonClass: 'button--change'
    };
    this.deleteButton = {
      imgSrc: './assets/img/trash.svg',
      text: 'Delete',
      buttonClass: 'button--delete'
    };
    this.saveButton = {
      imgSrc: './assets/img/edit.svg',
      text: 'Save',
      buttonClass: 'button--save'
    };
    this.cancelButton = {
      imgSrc: './assets/img/trash.svg',
      text: 'Cancel',
      buttonClass: 'button--delete'
    };
  }

  cancelEdit() {
    this.toggleEdit();
  }

  saveChanges() {
    this.toggleEdit();
    this.saveEvent.emit(this.eventCard.type);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
