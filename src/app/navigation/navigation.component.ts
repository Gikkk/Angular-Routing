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

  prevScrollpos = window.pageYOffset;
  active = false;
  @ViewChild("navbar") navbar: ElementRef;

  // sticky header
  @HostListener("window:scroll", [])
  @debounce(100)
  onWindowScroll() {
    let currentScrollPos = window.pageYOffset;

    // if (currentScrollPos === 0) {
    //   console.log('transperent');
    // } else if( currentScrollPos > 0){
    //   console.log('hide');
    // }else if(this.prevScrollpos > currentScrollPos){
    //   console.log('show');
    // }

    if(currentScrollPos > 0){
      this.renderer.addClass(this.navbar.nativeElement, "navbar__sticky");
      console.log(currentScrollPos);

    }else{
      this.renderer.removeClass(this.navbar.nativeElement, "navbar__sticky");
    };

    currentScrollPos = this.prevScrollpos;
    console.log(currentScrollPos);
  }

  // mobnav menu
  activeClass(){
    this.active = !this.active
  }

  ngOnInit() {}
}
