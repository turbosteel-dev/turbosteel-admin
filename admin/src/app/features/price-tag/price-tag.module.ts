import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceTagRoutingModule } from './price-tag-routing.module';
import { PriceTagComponent } from './price-tag.component';
import { PriceTagListComponent } from './components/price-tag-list/price-tag-list.component';
import { NewPriceTagListComponent } from './components/new-price-tag-list/new-price-tag-list.component';
import { ViewPriceTagListComponent } from './components/view-price-tag-list/view-price-tag-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PriceTagComponent,
    PriceTagListComponent,
    NewPriceTagListComponent,
    ViewPriceTagListComponent
  ],
  imports: [
    CommonModule,
    PriceTagRoutingModule,
    SharedModule
  ]
})
export class PriceTagModule { }
