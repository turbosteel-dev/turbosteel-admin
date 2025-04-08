import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/features/shared/shared.module';
import { VisionBannerComponent } from './components/vision-banner/vision-banner.component';
import { NewVisionBannerComponent } from './components/new-vision-banner/new-vision-banner.component';
import { ViewVisionBannerComponent } from './components/view-vision-banner/view-vision-banner.component';
import { VisionListComponent } from './components/vision-list/vision-list.component';
import { NewVisionListComponent } from './components/new-vision-list/new-vision-list.component';
import { ViewVisionListComponent } from './components/view-vision-list/view-vision-list.component';

@NgModule({
  declarations: [
    AboutComponent,
    VisionBannerComponent,
    NewVisionBannerComponent,
    ViewVisionBannerComponent,
    VisionListComponent,
    NewVisionListComponent,
    ViewVisionListComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
