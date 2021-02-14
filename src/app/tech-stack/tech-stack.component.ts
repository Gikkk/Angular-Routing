import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  constructor() { }

  status: boolean = true;
  buttonText = 'Stop Animation';

  toggleAnimation(){
    this.status = !this.status;
    if(this.status === true){
      this.buttonText = 'Stop Animation'
    }else{
      this.buttonText = "Start Animation";
    }
  }

  ngOnInit(): void {
  }

}
