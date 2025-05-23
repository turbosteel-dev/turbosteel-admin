import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChairmanRoutingModule } from './chairman-routing.module';
import { ChairmanComponent } from './chairman.component';
import { ChairmanBannerComponent } from './components/chairman-banner/chairman-banner.component';
import { NewChairmanBannerComponent } from './components/new-chairman-banner/new-chairman-banner.component';
import { ViewChairmanMessageComponent } from './components/view-chairman-message/view-chairman-message.component';
import { ChairmanDetailComponent } from './components/chairman-detail/chairman-detail.component';
import { NewChairmanDetailComponent } from './components/new-chairman-detail/new-chairman-detail.component';
import { ViewChairmanDetailComponent } from './components/view-chairman-detail/view-chairman-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    ChairmanComponent,
    ChairmanBannerComponent,
    NewChairmanBannerComponent,
    ViewChairmanMessageComponent,
    ChairmanDetailComponent,
    NewChairmanDetailComponent,
    ViewChairmanDetailComponent
  ],
  imports: [
    CommonModule,
    ChairmanRoutingModule,
    SharedModule
  ]
})
export class ChairmanModule { }
