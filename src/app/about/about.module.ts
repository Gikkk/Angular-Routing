import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { FocusComponent } from './focus/focus.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent , data: {animation: 'About'} }
]

@NgModule({
  declarations: [
    FocusComponent,
    CardComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [
    FocusComponent,
    CardComponent
  ]
})
export class AboutModule { }
