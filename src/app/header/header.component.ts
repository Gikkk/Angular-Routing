import { Component, ViewChild, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounce } from '../debounce.decorator';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  active = false;
  cancelScroll = false;

  @ViewChild("navbar") navbar: ElementRef;
  constructor( private renderer: Renderer2, private activatedRoute: ActivatedRoute, private viewportScroller: ViewportScroller ) {}

  @HostListener("window:scroll", [])
  @debounce()
  onWindowScroll() {
    let currentScrollPos = window.pageYOffset;
    if (this.cancelScroll) {
      return;
    }

    if(currentScrollPos > 0){
      this.renderer.addClass(this.navbar.nativeElement, "navbar__sticky");
    }else{
      this.renderer.removeClass(this.navbar.nativeElement, "navbar__sticky");
    }
  }


  activeClass(){
    this.active = !this.active;
    this.cancelScroll = !this.cancelScroll
  }

  scroll() {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
        console.log(fragment);
      }
    })
  }

  ngOnInit(): void {

  }

}
