import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { NewFacilityBannerComponent } from './components/new-facility-banner/new-facility-banner.component';
import { FacilityBannerComponent } from './components/facility-banner/facility-banner.component';
import { ViewFacilityBannerComponent } from './components/view-facility-banner/view-facility-banner.component';
import { FacilitiesCategoryComponent } from './components/facilities-category/facilities-category.component';
import { NewFacilitiesCategoryComponent } from './components/new-facilities-category/new-facilities-category.component';
import { ViewFacilitiesCategoryComponent } from './components/view-facilities-category/view-facilities-category.component';
import { FacilitiesDetailComponent } from './components/facilities-detail/facilities-detail.component';
import { NewFacilitiesDetailComponent } from './components/new-facilities-detail/new-facilities-detail.component';
import { ViewFacilitiesDetailComponent } from './components/view-facilities-detail/view-facilities-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    FacilitiesComponent,
    NewFacilityBannerComponent,
    FacilityBannerComponent,
    ViewFacilityBannerComponent,
    FacilitiesCategoryComponent,
    NewFacilitiesCategoryComponent,
    ViewFacilitiesCategoryComponent,
    FacilitiesDetailComponent,
    NewFacilitiesDetailComponent,
    ViewFacilitiesDetailComponent,
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    SharedModule
  ]
})
export class FacilitiesModule { }
