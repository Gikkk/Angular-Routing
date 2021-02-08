import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  status: boolean = true;
  buttonText = 'Stop Animation';

  toggleAnimation(){
    this.status = !this.status;
    if(this.status === true){
      this.buttonText = 'Start Animation'
    }else{
      this.buttonText = "Stop Animation";
    }
  }

  ngOnInit(){

  }

}
