import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  Imagedata = ["assets/slider/myPic.jpg", "assets/slider/random.jpg", "assets/slider/practice.jpg"];
  startIndex = 1;

  functionSlide() {
    const slides = Array.from(document.getElementsByClassName('slider__fade'));
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

  Repeat() {
    setTimeout(() => {
      this.functionSlide();
      this.Repeat();
    }, 4000);
  }

  ngOnInit(): void {
    this.Repeat();
  }

}
