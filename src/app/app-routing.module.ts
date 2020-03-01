import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WorksScreenComponent } from './works-screen/works-screen.component';
import { WorkDetailsScreenComponent } from './work-details-screen/work-details-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AboutScreenComponent } from './about-screen/about-screen.component';


const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'works',
    component: WorksScreenComponent
  },
  {
    path: 'work/:id',
    component: WorkDetailsScreenComponent
  },
  {
    path: 'about',
    component: AboutScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
