import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MProcessRoutingModule } from './m-process-routing.module';
import { MProcessComponent } from './m-process.component';
import { MProcessBannerComponent } from './components/m-process-banner/m-process-banner.component';
import { NewMProcessBannerComponent } from './components/new-m-process-banner/new-m-process-banner.component';
import { ViewMProcessBannerComponent } from './components/view-m-process-banner/view-m-process-banner.component';
import { MProcessDetailComponent } from './components/m-process-detail/m-process-detail.component';
import { NewMProcessDetailComponent } from './components/new-m-process-detail/new-m-process-detail.component';
import { ViewMProcessDetailComponent } from './components/view-m-process-detail/view-m-process-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    MProcessComponent,
    MProcessBannerComponent,
    NewMProcessBannerComponent,
    ViewMProcessBannerComponent,
    MProcessDetailComponent,
    NewMProcessDetailComponent,
    ViewMProcessDetailComponent
  ],
  imports: [
    CommonModule,
    MProcessRoutingModule,
    SharedModule
  ]
})
export class MProcessModule { }
