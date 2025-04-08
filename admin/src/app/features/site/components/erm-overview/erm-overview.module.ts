import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErmOverviewRoutingModule } from './erm-overview-routing.module';
import { ErmOverviewComponent } from './erm-overview.component';
import { ErmBannerComponent } from './components/erm-banner/erm-banner.component';
import { NewErmBannerComponent } from './components/new-erm-banner/new-erm-banner.component';
import { ViewErmBannerComponent } from './components/view-erm-banner/view-erm-banner.component';
import { ErmDetailComponent } from './components/erm-detail/erm-detail.component';
import { NewErmDetailComponent } from './components/new-erm-detail/new-erm-detail.component';
import { ViewErmDetailComponent } from './components/view-erm-detail/view-erm-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    ErmOverviewComponent,
    ErmBannerComponent,
    NewErmBannerComponent,
    ViewErmBannerComponent,
    ErmDetailComponent,
    NewErmDetailComponent,
    ViewErmDetailComponent
  ],
  imports: [
    CommonModule,
    ErmOverviewRoutingModule,
    SharedModule
  ]
})
export class ErmOverviewModule { }
