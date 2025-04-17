import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealershipRoutingModule } from './dealership-routing.module';
import { DealershipComponent } from './dealership.component';
import { DealershipListComponent } from './components/dealership-list/dealership-list.component';
import { ViewDealershipListComponent } from './components/view-dealership-list/view-dealership-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DealershipComponent,
    DealershipListComponent,
    ViewDealershipListComponent
  ],
  imports: [
    CommonModule,
    DealershipRoutingModule,
    SharedModule
  ]
})
export class DealershipModule { }
