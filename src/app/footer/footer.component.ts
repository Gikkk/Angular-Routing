import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  backToTop(){
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  ngOnInit(): void {

  }
}
