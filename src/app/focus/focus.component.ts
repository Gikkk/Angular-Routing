import { AfterViewInit, Component, ElementRef, OnDestroy,Renderer2,ViewChild } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  @ViewChild('testing') test: ElementRef;
  private observer: IntersectionObserver;


  ngAfterViewInit() {
    this.observer = new IntersectionObserver( entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting === true ) {
          console.log(entries);
          this.renderer.addClass(this.test.nativeElement, 'cssanimation');
        } else {
          console.log(entries);
        }
      });
    },{
      threshold: 0.5
    });

    this.observer.observe(this.test.nativeElement as HTMLElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
