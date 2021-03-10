import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { debounce } from '../debounce.decorator';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  active = false;
  cancelScroll = false;

  @ViewChild("navbar") navbar: ElementRef;
  constructor( private renderer: Renderer2) {}

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

  ngAfterViewInit(): void {
  }

}
