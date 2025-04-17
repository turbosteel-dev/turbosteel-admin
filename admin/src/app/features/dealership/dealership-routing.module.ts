import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealershipComponent } from './dealership.component';
import { DealershipListComponent } from './components/dealership-list/dealership-list.component';
import { ViewDealershipListComponent } from './components/view-dealership-list/view-dealership-list.component';

const routes: Routes = [
   {
      path: '',
      component: DealershipComponent,
    },
    {
      path: 'dealership-list',
      component: DealershipListComponent
    },
    {
      path: 'view/:id',
      component: ViewDealershipListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealershipRoutingModule { }
