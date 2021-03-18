import { Component, OnInit } from '@angular/core';
import { ScrollService } from  '../scroll.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private scrollService: ScrollService) {
    this.scrollService.scrollToTop();
  }

  backToTop(){
    this.scrollService.scrollToTop();
  }

  ngOnInit(): void {

  }
}

