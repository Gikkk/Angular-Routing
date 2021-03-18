import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './contact/map/map.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './about/slider/slider.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CircularMenuComponent } from './main/circular-menu/circular-menu.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { FocusComponent } from './focus/focus.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'skills', component: TechStackComponent},
  {path: 'focus', component: FocusComponent},
  {path: 'who', component: AboutComponent},
  {path: 'what', component: ProjectComponent},
  {path: 'where', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    MapComponent,
    AboutComponent,
    SliderComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    CircularMenuComponent,
    TechStackComponent,
    FocusComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ParticlesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
