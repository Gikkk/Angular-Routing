import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';

import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact.component';

// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

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
    // TranslateModule.forRoot({
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient]
    //   }
    // })
  ],
  exports: [
    MapComponent
  ]
})
export class ContactModule { }
