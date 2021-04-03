import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Mode } from '../time-setting/time-setting';

@Component({
  selector: 'time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeControlComponent),
      multi: true
    }
  ]
})
export class TimeControlComponent implements ControlValueAccessor {

  value = 0;
  @Input()
  mode: Mode = 'time';

  constructor() {
  }

  onChange: any = () => {
  };

  writeValue(obj: number) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
  }

  increaseTime() {
    this.value++;
    if (this.mode === 'time' && this.value > 24) {
      this.value = 0;
    }
    this.onChange(this.value);
  }

  decreaseTime() {
    this.value--;
    if (this.value < 0) {
      this.value = 0;
    }
    this.onChange(this.value);
  }
}
