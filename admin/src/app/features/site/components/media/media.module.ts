import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { MediaBannerComponent } from './components/media-banner/media-banner.component';
import { NewMediaBannerComponent } from './components/new-media-banner/new-media-banner.component';
import { ViewMediaBannerComponent } from './components/view-media-banner/view-media-banner.component';
import { MediaCategoryComponent } from './components/media-category/media-category.component';
import { NewMediaCategoryComponent } from './components/new-media-category/new-media-category.component';
import { ViewMediaCategoryComponent } from './components/view-media-category/view-media-category.component';
import { MediaImageComponent } from './components/media-image/media-image.component';
import { NewMediaImageComponent } from './components/new-media-image/new-media-image.component';
import { ViewMediaImageComponent } from './components/view-media-image/view-media-image.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    MediaComponent,
    MediaBannerComponent,
    NewMediaBannerComponent,
    ViewMediaBannerComponent,
    MediaCategoryComponent,
    NewMediaCategoryComponent,
    ViewMediaCategoryComponent,
    MediaImageComponent,
    NewMediaImageComponent,
    ViewMediaImageComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule
  ]
})
export class MediaModule { }
