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

  }

  ngOnDestroy(){
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
