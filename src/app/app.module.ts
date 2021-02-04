import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ParticlesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAykJQ1kiIQL-Y9LHUuQH-GRuQEYqTQiVs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
