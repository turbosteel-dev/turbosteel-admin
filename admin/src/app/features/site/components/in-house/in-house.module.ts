import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InHouseRoutingModule } from './in-house-routing.module';
import { InHouseComponent } from './in-house.component';
import { InHouseBannerComponent } from './components/in-house-banner/in-house-banner.component';
import { NewInHouseBannerComponent } from './components/new-in-house-banner/new-in-house-banner.component';
import { ViewInHouseBannerComponent } from './components/view-in-house-banner/view-in-house-banner.component';
import { InHouseDetailComponent } from './components/in-house-detail/in-house-detail.component';
import { NewInHouseDetailComponent } from './components/new-in-house-detail/new-in-house-detail.component';
import { ViewInHouseDetailComponent } from './components/view-in-house-detail/view-in-house-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    InHouseComponent,
    InHouseBannerComponent,
    NewInHouseBannerComponent,
    ViewInHouseBannerComponent,
    InHouseDetailComponent,
    NewInHouseDetailComponent,
    ViewInHouseDetailComponent
  ],
  imports: [
    CommonModule,
    InHouseRoutingModule,
    SharedModule
  ]
})
export class InHouseModule { }
