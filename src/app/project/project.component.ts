import { AfterViewInit, Component, ElementRef, OnDestroy,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  @ViewChild('fadeInRight') fadeInRight: ElementRef;
  @ViewChild('fadeInLeft') fadeInLeft: ElementRef;

  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.fadeInLeft.nativeElement, 'fadeInAnimLeft');
          this.renderer.addClass(this.fadeInRight.nativeElement, 'fadeInAnimRight');
          this.observer.unobserve(entry.target)
          console.log('projects loaded');
        }
      });
    },{
      threshold: 0.5
    });

    this.observer.observe(this.fadeInLeft.nativeElement as HTMLElement);
  }

  ngOnDestroy(){
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
