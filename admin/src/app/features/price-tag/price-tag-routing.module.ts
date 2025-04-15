import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceTagComponent } from './price-tag.component';
import { PriceTagListComponent } from './components/price-tag-list/price-tag-list.component';
import { ViewPriceTagListComponent } from './components/view-price-tag-list/view-price-tag-list.component';
import { NewPriceTagListComponent } from './components/new-price-tag-list/new-price-tag-list.component';

const routes: Routes = [
  {
    path: '',
    component: PriceTagComponent,
  },
  {
    path: 'pricetag-list',
    component: PriceTagListComponent
  },
  {
    path: 'new',
    component: NewPriceTagListComponent
  },
  {
    path: 'edit/:id',
    component: NewPriceTagListComponent
  },
  {
    path: 'view/:id',
    component: ViewPriceTagListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceTagRoutingModule { }
