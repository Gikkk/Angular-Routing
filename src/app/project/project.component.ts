import { AfterViewInit, Component, ElementRef, OnDestroy,Renderer2,ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  @ViewChild('fadeInAnim') fadeInAnim: ElementRef;
  @ViewChild('fadeInRight') fadeInRight: ElementRef;
  @ViewChild('fadeInLeft') fadeInLeft: ElementRef;

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
