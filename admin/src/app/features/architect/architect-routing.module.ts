import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectComponent } from './architect.component';
import { ArchitectListComponent } from './components/architect-list/architect-list.component';
import { ViewArchitectListComponent } from './components/view-architect-list/view-architect-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArchitectComponent,
  },
  {
    path: 'architect-list',
    component: ArchitectListComponent
  },
  {
    path: 'view/:id',
    component: ViewArchitectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectRoutingModule { }
