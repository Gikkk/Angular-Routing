import { Component, ViewChild, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { debounce } from '../debounce.decorator';
import { DOCUMENT } from  '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( private renderer: Renderer2 ){ }

  active = false;
  @ViewChild("navbar") navbar: ElementRef;

  // sticky header
  @HostListener("window:scroll", [])
  @debounce(100)
  onWindowScroll() {
    let currentScrollPos = window.pageYOffset;

    if(currentScrollPos > 0){
      this.renderer.addClass(this.navbar.nativeElement, "navbar__sticky");
    }else{
      this.renderer.removeClass(this.navbar.nativeElement, "navbar__sticky");
    }
  }

  // mobnav menu
  activeClass(){
    this.active = !this.active
  }

  ngOnInit() {}
}
