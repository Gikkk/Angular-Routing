import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {

  active = false;
  cancelScroll = false;

  constructor(private renderer: Renderer2) { }

  @ViewChild("navbar") navbar: ElementRef;
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.boundingClientRect.top < 0 && entry.boundingClientRect.bottom > 0) {
          this.renderer.addClass(this.navbar.nativeElement, 'navbar__sticky')
        }else{
          // this.renderer.removeClass(this.navbar.nativeElement, 'navbar__sticky')
          console.log(entry);
        }
      });
    },{
      threshold: [0, .25, .5, .75, 1]
    });

    this.observer.observe(this.navbar.nativeElement as HTMLElement);
  }

  ngOnDestroy(){
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  activeClass(){
    this.active = !this.active;
    this.cancelScroll = !this.cancelScroll
  }

}
