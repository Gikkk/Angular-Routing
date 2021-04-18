import { Component, ViewChild, ElementRef, Renderer2, HostListener, OnInit, Inject } from '@angular/core';
import { debounce } from '../helpers/debounce.decorator';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor( private renderer: Renderer2, private translate: TranslateService){
    translate.setDefaultLang('en');
  }

  active = false;
  @ViewChild("navbar") navbar: ElementRef;
  @ViewChild("Eng") Eng: ElementRef;
  @ViewChild("Geo") Geo: ElementRef;

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
  }

  // mobnav menu
  activeClass(){
    this.active = !this.active
  }

  langChange(language: string): void {
    this.translate.use(language);
    if(language === 'ge'){
      this.renderer.addClass(this.Geo.nativeElement, "navbar__btn--active");
      this.renderer.removeClass(this.Eng.nativeElement, "navbar__btn--active");
    }else{
      this.renderer.removeClass(this.Geo.nativeElement, "navbar__btn--active");
      this.renderer.addClass(this.Eng.nativeElement, "navbar__btn--active");
    }
  }

  ngOnInit() {}
}
