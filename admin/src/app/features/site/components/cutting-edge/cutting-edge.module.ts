import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuttingEdgeRoutingModule } from './cutting-edge-routing.module';
import { CuttingEdgeComponent } from './cutting-edge.component';
import { CuttingedgeBannerComponent } from './component/cuttingedge-banner/cuttingedge-banner.component';
import { NewCuttingedgeBannerComponent } from './component/new-cuttingedge-banner/new-cuttingedge-banner.component';
import { ViewCuttingedgeBannerComponent } from './component/view-cuttingedge-banner/view-cuttingedge-banner.component';
import { CuttingedgeDetailComponent } from './component/cuttingedge-detail/cuttingedge-detail.component';
import { NewCuttingedgeDetailComponent } from './component/new-cuttingedge-detail/new-cuttingedge-detail.component';
import { ViewCuttingedgeDetailComponent } from './component/view-cuttingedge-detail/view-cuttingedge-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';


@NgModule({
  declarations: [
    CuttingEdgeComponent,
    CuttingedgeBannerComponent,
    NewCuttingedgeBannerComponent,
    ViewCuttingedgeBannerComponent,
    CuttingedgeDetailComponent,
    NewCuttingedgeDetailComponent,
    ViewCuttingedgeDetailComponent,
  ],
  imports: [
    CommonModule,
    CuttingEdgeRoutingModule,
    SharedModule
  ]
})
export class CuttingEdgeModule { }
