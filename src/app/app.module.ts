import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './contact/map/map.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CircularMenuComponent } from './main/circular-menu/circular-menu.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { FocusComponent } from './focus/focus.component';
import { CardComponent } from './about/card/card.component';

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
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    CircularMenuComponent,
    TechStackComponent,
    FocusComponent,
    CardComponent,
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ParticlesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
