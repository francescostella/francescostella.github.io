import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {
    path: '',
    component: WorksComponent
  },
  {
    path: 'work/:id',
    component: WorkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
