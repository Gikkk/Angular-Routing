import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectComponent , data: {animation: 'Projects'} }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: []
})
export class ProjectModule { }
