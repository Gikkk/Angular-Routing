import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IsBrowserService } from  '../helpers/is-browser.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit{

  constructor( private viewportScroller: ViewportScroller, private isBrowserService: IsBrowserService) {}

  ngOnInit(): void {}

  isBrowser = this.isBrowserService.isBrowser

  scrollToTop() {
    if(this.isBrowser){
      let currentPos = window.pageYOffset;
      if (currentPos > 0) {
        window.scrollTo({top: 0,behavior: "smooth"});
      }
    }
  }

  // scrollToTop() {
  //   this.viewportScroller.scrollToPosition([0, 0])
  // }
}
