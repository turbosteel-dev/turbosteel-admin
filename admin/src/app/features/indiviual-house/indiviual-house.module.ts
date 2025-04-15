import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiviualHouseRoutingModule } from './indiviual-house-routing.module';
import { IndiviualHouseComponent } from './indiviual-house.component';
import { IndividualHouseListComponent } from './components/individual-house-list/individual-house-list.component';
import { ViewIndividualHouseComponent } from './components/view-individual-house/view-individual-house.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndiviualHouseComponent,
    IndividualHouseListComponent,
    ViewIndividualHouseComponent
  ],
  imports: [
    CommonModule,
    IndiviualHouseRoutingModule,
    SharedModule
  ]
})
export class IndiviualHouseModule { }
