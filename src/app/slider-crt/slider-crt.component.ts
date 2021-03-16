import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-crt',
  templateUrl: './slider-crt.component.html',
  styleUrls: ['./slider-crt.component.scss']
})
export class SliderCrtComponent implements OnInit {

  constructor() { }

  slideIndex = 1;
  showSlides(slideIndex);

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length){
      this.slideIndex = 1
    }
    if (n < 1){
      this.slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      let slide = slides[i] as HTMLElement;
      slide.style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  ngOnInit(): void {
    this.showSlides(this.slideIndex)
  }
}
