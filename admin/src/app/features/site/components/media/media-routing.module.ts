import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: MediaComponent,
    children: [
      {
        path: 'media-banner',
        children: [
          {
            path: '',
            component: MediaBannerComponent
          },
          {
            path: 'new',
            component: NewMediaBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewMediaBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewMediaBannerComponent
          }
        ]
      },
      {
        path: 'media-category',
        children: [
          {
            path: '',
            component: MediaCategoryComponent
          },
          {
            path: 'new',
            component: NewMediaCategoryComponent
          },
          {
            path: 'edit/:id',
            component: NewMediaCategoryComponent
          },
          {
            path: 'view/:id',
            component: ViewMediaCategoryComponent
          }
        ]
      },
      {
        path: 'media-image',
        children: [
          {
            path: '',
            component: MediaImageComponent
          },
          {
            path: 'new',
            component: NewMediaImageComponent
          },
          {
            path: 'edit/:id',
            component: NewMediaImageComponent
          },
          {
            path: 'view/:id',
            component: ViewMediaImageComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
