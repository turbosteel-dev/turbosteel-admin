import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { CareerBannerComponent } from './components/career-banner/career-banner.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { NewCareerBannerComponent } from './components/new-career-banner/new-career-banner.component';
import { ViewCareerBannerComponent } from './components/view-career-banner/view-career-banner.component';
import { NewCareerListComponent } from './components/new-career-list/new-career-list.component';
import { ViewCareerListComponent } from './components/view-career-list/view-career-list.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    CareerComponent,
    CareerBannerComponent,
    CareerListComponent,
    NewCareerBannerComponent,
    ViewCareerBannerComponent,
    NewCareerListComponent,
    ViewCareerListComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    SharedModule
  ]
})
export class CareerModule { }
