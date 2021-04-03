import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[repeatTimes]'
})
export class RepeatTimesDirective {

  constructor(private _templateRef: TemplateRef<any>,
              private _viewContainerRef: ViewContainerRef) {
  }

  @Input()
  set repeatTimes(value: number) {
    for (let i = 0; i < value; i++) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }

}
