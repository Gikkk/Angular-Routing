import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor() { }

  public active : boolean = false;

  activeClass(){
    this.active = !this.active;
  }

  ngOnInit(): void {
  }

}
