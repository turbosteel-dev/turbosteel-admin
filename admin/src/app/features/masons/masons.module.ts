import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonsRoutingModule } from './masons-routing.module';
import { MasonsComponent } from './masons.component';
import { MasonsListComponent } from './components/masons-list/masons-list.component';
import { ViewMasonsListComponent } from './components/view-masons-list/view-masons-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MasonsComponent,
    MasonsListComponent,
    ViewMasonsListComponent
  ],
  imports: [
    CommonModule,
    MasonsRoutingModule,
    SharedModule
  ]
})
export class MasonsModule { }
