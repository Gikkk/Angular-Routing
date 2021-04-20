import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit{

  constructor( private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {

  }

  scrollToTop() {
    let currentPos = window.pageYOffset;
    if (currentPos > 0) {
      window.scrollTo({top: 0,behavior: "smooth"});
    }
  }

  // scrollToTop() {
  //   this.viewportScroller.scrollToPosition([0, 0])
  // }
}
