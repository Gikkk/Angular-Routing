import { Component, OnInit } from '@angular/core';
import { ScrollService } from  '../scroll.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private scrollService: ScrollService) {}

  Imagedata = ['../../assets/slider/myPic.jpg', '../../assets/slider/practice.jpg', '../../assets/slider/random.jpg']
  startIndex = 0;

  backToTop(){
    this.scrollService.scrollToTop();
  }

  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

  ngOnInit(): void {
    this.Repeat();
  }
}

