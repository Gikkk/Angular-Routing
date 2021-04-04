import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements AfterViewInit{

  constructor() { }

  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
  }
}
