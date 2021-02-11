import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { debounce } from '../debounce.decorator';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild("navbar") navbar: ElementRef;
  constructor( private renderer: Renderer2) {}

  prevScrollPos = window.pageYOffset;
  @HostListener("window:scroll", [])
  @debounce()
  onWindowScroll() {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos >= currentScrollPos) {
      this.renderer.setStyle(this.navbar.nativeElement, 'top', '0px');
    } else {
      this.renderer.setStyle(this.navbar.nativeElement, 'top', '-68px');
    }
    this.prevScrollPos = currentScrollPos;
  }

  active = false;
  activeClass(){
    this.active = !this.active;
  }

  ngAfterViewInit(): void {
  }

}
