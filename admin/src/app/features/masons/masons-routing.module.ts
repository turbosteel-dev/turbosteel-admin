import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasonsComponent } from './masons.component';
import { MasonsListComponent } from './components/masons-list/masons-list.component';
import { ViewMasonsListComponent } from './components/view-masons-list/view-masons-list.component';

const routes: Routes = [
  {
    path: '',
    component: MasonsComponent,
  },
  {
    path: 'architect-list',
    component: MasonsListComponent
  },
  {
    path: 'view/:id',
    component: ViewMasonsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasonsRoutingModule { }
