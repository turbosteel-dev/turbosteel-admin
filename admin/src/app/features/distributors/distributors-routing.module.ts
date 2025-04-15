import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributorsComponent } from './distributors.component';
import { DistributorsListComponent } from './components/distributors-list/distributors-list.component';
import { ViewDistributorsComponent } from './components/view-distributors/view-distributors.component';
import { NewDistributorsComponent } from './components/new-distributors/new-distributors.component';

const routes: Routes = [
  {
    path: '',
    component: DistributorsComponent,
  },
  {
    path: '',
    component: DistributorsListComponent
  },
  {
    path: 'new',
    component: NewDistributorsComponent
  },
  {
    path: 'edit/:id',
    component: NewDistributorsComponent
  },
  {
    path: 'view/:id',
    component: ViewDistributorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorsRoutingModule { }
