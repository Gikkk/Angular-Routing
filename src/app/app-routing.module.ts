import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { TechComponent } from './blog/tech/tech.component';
import { ProgrammingComponent } from './blog/programming/programming.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: 'tech', // child route path
        component: TechComponent, // child route component that the router renders
      },
      {
        path: 'programming',
        component: ProgrammingComponent, // another child route component that the router renders
      },
    ],
  },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
