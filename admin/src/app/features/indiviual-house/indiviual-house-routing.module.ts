import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiviualHouseComponent } from './indiviual-house.component';
import { IndividualHouseListComponent } from './components/individual-house-list/individual-house-list.component';
import { ViewIndividualHouseComponent } from './components/view-individual-house/view-individual-house.component';

const routes: Routes = [
  {
    path: '',
    component: IndiviualHouseComponent,
  },
  {
    path: 'individual-list',
    component: IndividualHouseListComponent
  },
  {
    path: 'view/:id',
    component: ViewIndividualHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiviualHouseRoutingModule { }
