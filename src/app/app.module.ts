import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage';
import { MapComponent } from './contact/map/map.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CircularMenuComponent } from './circular-menu/circular-menu.component';
import { TechStackComponent } from './homepage/tech-stack/tech-stack.component';
import { FocusComponent } from './about/focus/focus.component';
import { CardComponent } from './about/card/card.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent , data: {animation: 'Home'} },
  { path: 'about', component: AboutComponent , data: {animation: 'About'} },
  { path: 'projects', component: ProjectComponent , data: {animation: 'Projects'} },
  { path: 'contact', component: ContactComponent , data: {animation: 'Contact'} }
]

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomepageComponent,
    MapComponent,
    AboutComponent,
    ProjectComponent,
    NavigationComponent,
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
      scrollPositionRestoration: 'enabled',
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
