import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchitectRoutingModule } from './architect-routing.module';
import { ArchitectComponent } from './architect.component';
import { ArchitectListComponent } from './components/architect-list/architect-list.component';
import { ViewArchitectListComponent } from './components/view-architect-list/view-architect-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ArchitectComponent,
    ArchitectListComponent,
    ViewArchitectListComponent
  ],
  imports: [
    CommonModule,
    ArchitectRoutingModule,
    SharedModule
  ]
})
export class ArchitectModule { }
