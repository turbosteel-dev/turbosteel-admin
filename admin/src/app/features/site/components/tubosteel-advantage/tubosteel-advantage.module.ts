import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TubosteelAdvantageRoutingModule } from './tubosteel-advantage-routing.module';
import { TubosteelAdvantageComponent } from './tubosteel-advantage.component';
import { TsaBannerComponent } from './components/tsa-banner/tsa-banner.component';
import { NewTsaBannerComponent } from './components/new-tsa-banner/new-tsa-banner.component';
import { ViewTsaBannerComponent } from './components/view-tsa-banner/view-tsa-banner.component';
import { TsaListComponent } from './components/tsa-list/tsa-list.component';
import { NewTsaListComponent } from './components/new-tsa-list/new-tsa-list.component';
import { ViewTsaListComponent } from './components/view-tsa-list/view-tsa-list.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    TubosteelAdvantageComponent,
    TsaBannerComponent,
    NewTsaBannerComponent,
    ViewTsaBannerComponent,
    TsaListComponent,
    NewTsaListComponent,
    ViewTsaListComponent
  ],
  imports: [
    CommonModule,
    TubosteelAdvantageRoutingModule,
    SharedModule
  ]
})
export class TubosteelAdvantageModule { }
