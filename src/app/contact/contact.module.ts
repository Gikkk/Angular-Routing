import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact.component';

const appRoutes: Routes = [
  { path: '', component: ContactComponent , data: {animationState: 'Contact'} }
]

@NgModule({
  declarations: [
    MapComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MapComponent
  ]
})
export class ContactModule { }
