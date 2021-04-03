import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu.component';

@Directive({
  selector: '[menuToggle]'
})
export class MenuToggleDirective {

  @Input()
  menuToggle: DropdownMenuComponent;

  constructor(private _elRef: ElementRef) {
  }

  @HostListener('click')
  toggle() {
    this.menuToggle.toggle = !this.menuToggle.toggle;
    this.toggleClass();
  }

  @HostListener('document:click', ['$event.target'])
  closeMenu(el: HTMLElement) {
    this.menuToggle.toggle = !(!this.menuToggle.toggle || !this._elRef.nativeElement.contains(el));
    this.toggleClass();
  }

  private toggleClass() {
    if (this.menuToggle.toggle) {
      this._elRef.nativeElement.firstChild.classList.add('open');
    } else {
      this._elRef.nativeElement.firstChild.classList.remove('open');
    }
  }
}


