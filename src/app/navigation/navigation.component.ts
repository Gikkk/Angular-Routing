import { Component, ViewChild, ElementRef, Renderer2, HostListener, OnInit, Inject } from '@angular/core';
import { debounce } from '../debounce.decorator';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( private renderer: Renderer2,){ }

  prevScrollpos = window.pageYOffset;
  active = false;
  @ViewChild("navbar") navbar: ElementRef;

  // sticky header
  @HostListener("window:scroll", [])
  @debounce(100)
  onScroll() {
    let currentScrollPos = window.pageYOffset;

    if(currentScrollPos > 0){
      this.renderer.addClass(this.navbar.nativeElement, "navbar__sticky");
    }else{
      this.renderer.removeClass(this.navbar.nativeElement, "navbar__sticky");
    };

    // let winScroll = this.doc.body.scrollHeight || this.doc.documentElement.scrollHeight;

    // let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // let scrolled = (winScroll / height) * 100;
    // document.getElementById("myBar").style.width = scrolled + "%";
  }

  // mobnav menu
  activeClass(){
    this.active = !this.active
  }

  ngOnInit() {}
}
