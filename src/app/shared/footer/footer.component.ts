import { Component, OnInit } from '@angular/core';
import { IsBrowserService } from  '../helpers/is-browser.service'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit{

  constructor( private isBrowserService: IsBrowserService ) {}

  ngOnInit(): void {}

  isBrowser = this.isBrowserService.isBrowser

  // back to top function
  scrollToTop() {
    if(this.isBrowser) {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }

  // scrollToTop() {
  //   this.viewportScroller.scrollToPosition([0, 0])
  // }
}
