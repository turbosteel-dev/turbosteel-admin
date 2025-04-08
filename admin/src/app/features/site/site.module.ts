import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    SharedModule
  ]
})
export class SiteModule { }
