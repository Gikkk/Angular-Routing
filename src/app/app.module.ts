import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './contact/map/map.component';
import { ParticlesComponent } from './main/particles/particles.component';
import { AboutComponent } from './about/about.component';
import { SliderComponent } from './about/slider/slider.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CircularMenuComponent } from './main/circular-menu/circular-menu.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { FocusComponent } from './focus/focus.component';
import { LanguageComponent } from './about/language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    MapComponent,
    ParticlesComponent,
    AboutComponent,
    SliderComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    CircularMenuComponent,
    TechStackComponent,
    FocusComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ParticlesModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
