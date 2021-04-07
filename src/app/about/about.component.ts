import { AfterViewInit, Component, ElementRef, OnDestroy,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnDestroy{

  constructor(private renderer: Renderer2) { }

  @ViewChild('fadeInRight') fadeInRight: ElementRef;

  options = {
    rootMargin: '0px',
    threshold: 0.1
  };
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.fadeInRight.nativeElement, 'fadeInAnimRight');
          this.observer.unobserve(entry.target)
          console.log('projects loaded');
        }
      });
    }, this.options);

    this.observer.observe(this.fadeInRight.nativeElement as HTMLElement);
  }

  ngOnDestroy(){
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

}
