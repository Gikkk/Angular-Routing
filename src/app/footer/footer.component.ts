import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ScrollService } from  '../scroll.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition("void <=> *", [animate("0.5s ease-in-out")])
  ])]
})
export class FooterComponent implements OnInit{

  constructor( private scrollService: ScrollService) {}

  ngOnInit(): void {

  }

  backToTop(){
    this.scrollService.scrollToTop();
  }

  counter = 0;
  slideItems = [
    { src: 'https://placeimg.com/600/600/any', title: 'Title 1' },
    { src: 'https://placeimg.com/600/600/nature', title: 'Title 2' },
    { src: 'https://placeimg.com/600/600/sepia', title: 'Title 3' },
    { src: 'https://placeimg.com/600/600/people', title: 'Title 4' },
    { src: 'https://placeimg.com/600/600/tech', title: 'Title 5' }
  ];

  showNextImage() {
    if (this.counter < this.slideItems.length -1) {
      this.counter += 1;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
}

// this.navLinks.forEach((navLink, activeIndex) => {
//   navLink.addEventListener("click", () => {
//     // nav-link
//     this.navLinks.forEach(navLink => navLink.classList.remove("active"));
//     navLink.classList.add("active");

//     // slide
//     let currentSlide = document.querySelector(".active");
//     let slideFadeOut = currentSlide.animate(
//       [
//         { transform: "translateX(0)", opacity: 1 },
//         { transform: "translateX(5%)", opacity: 0 }
//       ],
//       {
//         duration: 600,
//         easing: "ease-in",
//         fill: "forwards"
//       }
//     );

//     slideFadeOut.onfinish = () => {
//       this.slides.forEach(slide => slide.classList.remove("active"));
//       let activeSlide = this.slides[activeIndex];
//       activeSlide.classList.add("active");
//       activeSlide.animate(
//         [
//           {
//             transform: "translateX(-5%)",
//             opacity: 0
//           },
//           {
//             transform: "translateX(0)",
//             opacity: 1
//           }
//         ],
//         { duration: 600, easing: "ease-out", fill: "forwards" }
//       );
//     };
//   });
// });
