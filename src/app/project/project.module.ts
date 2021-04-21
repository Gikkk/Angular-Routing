import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';

const appRoutes: Routes = [
  { path: '', component: ProjectComponent , data: {animation: 'Projects'} }
]

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: []
})
export class ProjectModule { }
