import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasonsRoutingModule } from './masons-routing.module';
import { MasonsComponent } from './masons.component';


@NgModule({
  declarations: [
    MasonsComponent
  ],
  imports: [
    CommonModule,
    MasonsRoutingModule
  ]
})
export class MasonsModule { }
