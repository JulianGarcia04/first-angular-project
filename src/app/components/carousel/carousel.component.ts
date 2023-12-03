import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() nroElements!: number;

  @Output() nroElementsChange = new EventEmitter<number>();

  @Input() disableNavigation: boolean = false;

  handlerPrev() {
    if (this.disableNavigation) {
      return;
    }
    this.nroElements = this.nroElements - 1;
    this.nroElementsChange.emit(this.nroElements);
  }

  handlerPost() {
    if (this.disableNavigation) {
      return;
    }
    this.nroElements = this.nroElements + 1;
    this.nroElementsChange.emit(this.nroElements);
  }
}
