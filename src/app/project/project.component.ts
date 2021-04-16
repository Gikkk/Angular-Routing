import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements AfterViewInit {

  constructor() { }

  fk(targ){
    console.log(targ)
  }

  ngAfterViewInit() {

  }

}
