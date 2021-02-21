import { Component,  OnInit } from '@angular/core';
import { debounce } from '../debounce.decorator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  // @ViewChild('testDiv', {static: false}) private testDiv: ElementRef<HTMLDivElement>;
  // isTestDivScrolledIntoView: boolean;

  // @HostListener("window:scroll", [])
  // @debounce()
  // onWindowScroll() {
  //   if (this.testDiv){
  //     const rect = this.testDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     if(topShown && bottomShown){
  //       this.testDiv.nativeElement.classList.add('test')
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

}
