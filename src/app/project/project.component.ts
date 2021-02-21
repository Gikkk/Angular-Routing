import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longList: number[] = [1, 2, 3,4,5,5,6,7,8,9,0,1, 2, 3,4,5,5,6,7,8,9,0,1, 2, 3,4,5,5,6,7,8,9,0,1, 2, 3,4,5,5,6,7,8,9,0,]

}
