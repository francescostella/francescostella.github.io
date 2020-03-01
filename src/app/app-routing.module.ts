import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WorksScreenComponent } from './works-screen/works-screen.component';
import { WorkDetailsScreenComponent } from './work-details-screen/work-details-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AboutScreenComponent } from './about-screen/about-screen.component';
import { ContactScreenComponent } from './contact-screen/contact-screen.component';


const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    data: {
      screen: 'home'
    }
  },
  {
    path: 'works',
    component: WorksScreenComponent,
    data: {
      screen: 'works'
    }
  },
  {
    path: 'work/:id',
    component: WorkDetailsScreenComponent,
    data: {
      screen: 'work'
    }
  },
  {
    path: 'about',
    component: AboutScreenComponent,
    data: {
      screen: 'about'
    }
  },
  {
    path: 'contact',
    component: ContactScreenComponent,
    data: {
      screen: 'contact'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
