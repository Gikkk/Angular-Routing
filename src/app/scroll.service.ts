import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor( private viewportScroller: ViewportScroller) {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0])
  }

  scrollToAnchor(elementId): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
