import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticlesModule } from 'angular-particle';

import { TechStackComponent } from './tech-stack/tech-stack.component';
import { HomepageComponent } from './homepage';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent , data: {animation: 'Home'} }
]

@NgModule({
  declarations: [
    TechStackComponent,
    HomepageComponent
  ],
  imports: [
    ParticlesModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    TechStackComponent
  ]
})
export class HomepageModule { }
