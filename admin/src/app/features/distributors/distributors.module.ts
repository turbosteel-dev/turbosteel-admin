import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorsRoutingModule } from './distributors-routing.module';
import { DistributorsComponent } from './distributors.component';
import { NewDistributorsComponent } from './components/new-distributors/new-distributors.component';
import { ViewDistributorsComponent } from './components/view-distributors/view-distributors.component';
import { SharedModule } from '../shared/shared.module';
import { DistributorsListComponent } from './components/distributors-list/distributors-list.component';

@NgModule({
  declarations: [
    DistributorsComponent,
    NewDistributorsComponent,
    ViewDistributorsComponent,
    DistributorsListComponent
  ],
  imports: [
    CommonModule,
    DistributorsRoutingModule,
    SharedModule
  ]
})
export class DistributorsModule { }
