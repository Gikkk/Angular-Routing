import { AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { ScrollService } from  '../scroll.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor( private scrollService: ScrollService) {}

  @ViewChildren('testing') slides: QueryList<any>;
  @ViewChildren('slider__nav') navLinks: QueryList<any>;

  backToTop(){
    this.scrollService.scrollToTop();
  }

  ngAfterViewInit(){

  }

  ngOnInit(): void {

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
