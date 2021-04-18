import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor( private title: Title, private meta: Meta ) {}

  ngOnInit() {
    this.title.setTitle("Projects - Dev Portfolio");
  }

}
