import { AfterViewInit, Component, ElementRef, OnDestroy,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  @ViewChild('rotatableEl') rotatableEl: ElementRef;
  @ViewChild('fadeIn') fadeInEl: ElementRef;

  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting === true ) {
          this.renderer.addClass(this.fadeInEl.nativeElement, 'fadeInAnim');
          this.renderer.setStyle(this.rotatableEl.nativeElement, 'animation-play-state', 'running');
          console.log('tech stack loaded');
        }
      });
    },{
      threshold: 0.8
    });

    this.observer.observe(this.fadeInEl.nativeElement as HTMLElement);
  }

  ngOnDestroy(){
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

}
