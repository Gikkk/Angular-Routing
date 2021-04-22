import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { ProjectComponent } from './project.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: '', component: ProjectComponent , data: {animationState: 'Projects'} }
]

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild(appRoutes),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: []
})
export class ProjectModule { }
