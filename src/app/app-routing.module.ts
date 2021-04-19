import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: '', component: HomepageComponent , data: {animation: 'Home'} },
  // { path: 'about', component: AboutComponent , data: {animation: 'About'} },
  // { path: 'projects', component: ProjectComponent , data: {animation: 'Projects'} },
  // { path: 'contact', component: ContactComponent , data: {animation: 'Contact'} }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
