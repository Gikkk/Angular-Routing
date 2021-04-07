import { AfterViewInit, Component, ElementRef, OnDestroy,Renderer2,Testability,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  @ViewChild('rotatableEl') rotatableEl: ElementRef;
  @ViewChild('fadeIn') fadeInEl: ElementRef;

  options = {
    rootMargin: '0px',
    threshold: 0.1
  };
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.fadeInEl.nativeElement, 'fadeInAnim');
          this.renderer.setStyle(this.rotatableEl.nativeElement, 'animation-play-state', 'running');
          this.observer.unobserve(entry.target);
          this.observer.disconnect();
          this.observer = undefined;
        }
      });
    }, this.options);

    this.observer.observe(this.fadeInEl.nativeElement as HTMLElement);
  }
}
