import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { NewAboutBannerComponent } from './components/new-about-banner/new-about-banner.component';
import { ViewAboutBannerComponent } from './components/view-about-banner/view-about-banner.component';
import { AboutGalleryComponent } from './components/about-gallery/about-gallery.component';
import { NewAboutGallerComponent } from './components/new-about-galler/new-about-galler.component';
import { ViewAboutGalleryComponent } from './components/view-about-gallery/view-about-gallery.component';
import { AboutDetailComponent } from './components/about-detail/about-detail.component';
import { NewAboutDetailComponent } from './components/new-about-detail/new-about-detail.component';
import { ViewAboutDetailComponent } from './components/view-about-detail/view-about-detail.component';
import { AboutListComponent } from './components/about-list/about-list.component';
import { NewAboutListComponent } from './components/new-about-list/new-about-list.component';
import { ViewAboutListComponent } from './components/view-about-list/view-about-list.component';
import { SharedModule } from 'src/app/features/shared/shared.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    AboutBannerComponent,
    NewAboutBannerComponent,
    ViewAboutBannerComponent,
    AboutGalleryComponent,
    NewAboutGallerComponent,
    ViewAboutGalleryComponent,
    AboutDetailComponent,
    NewAboutDetailComponent,
    ViewAboutDetailComponent,
    AboutListComponent,
    NewAboutListComponent,
    ViewAboutListComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
