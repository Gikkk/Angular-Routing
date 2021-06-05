import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { TechComponent } from './tech/tech.component';
import { ProgrammingComponent } from './programming/programming.component';


@NgModule({
  declarations: [
    BlogComponent,
    TechComponent,
    ProgrammingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
