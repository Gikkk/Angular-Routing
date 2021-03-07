import { Component,  OnInit } from '@angular/core';
import { debounce } from '../debounce.decorator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  // @ViewChild('projects__tagDiv', {static: false}) private projects__tagDiv: ElementRef<HTMLDivElement>;
  // isTestDivScrolledIntoView: boolean;

  // @HostListener("window:scroll", [])
  // @debounce()
  // onWindowScroll() {
  //   if (this.projects__tagDiv){
  //     const rect = this.projects__tagDiv.nativeElement.getBoundingClientRect();
  //     const topShown = rect.top >= 0;
  //     const bottomShown = rect.bottom <= window.innerHeight;
  //     if(topShown && bottomShown){
  //       this.projects__tagDiv.nativeElement.classList.add('projects__tag')
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

}
