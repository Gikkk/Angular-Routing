import { Component, ViewChild, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { debounce } from '../debounce.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  active = false;
  cancelScroll = false;

  constructor(private renderer: Renderer2) { }
  @ViewChild("navbar") navbar: ElementRef;

  @HostListener("window:scroll", [])
  @debounce(100)
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

  ngOnInit(): void {
  }

}
