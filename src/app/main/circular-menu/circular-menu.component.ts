import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss']
})
export class CircularMenuComponent implements OnInit {

  constructor() { }

  active = false;

  activeClass(){
    this.active = !this.active;
  }

  // myElement = document.getElementById('my-element');
  // bounding = this.myElement.getBoundingClientRect();
  // myElementHeight = this.myElement.offsetHeight;
  // myElementWidth = this.myElement.offsetWidth;

  // elementInViewport() {
  //   const bounding = this.myElement.getBoundingClientRect();
  //   if (bounding.top >= -this.myElementHeight
  //       && bounding.left >= -this.myElementWidth
  //       && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + this.myElementWidth
  //       && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + this.myElementHeight) {

  //       console.log('Element is in the viewport!');
  //   } else {

  //       console.log('Element is NOT in the viewport!');
  //   }
  // }

  ngOnInit(): void {
  }

}
