import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: 'about-banner',
        children: [
          {
            path: '',
            component: AboutBannerComponent
          },
          {
            path: 'new',
            component: NewAboutBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewAboutBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewAboutBannerComponent
          }
        ]
      },
      {
        path: 'about-gallery',
        children: [
          {
            path: '',
            component: AboutGalleryComponent
          },
          {
            path: 'new',
            component: NewAboutGallerComponent
          },
          {
            path: 'edit/:id',
            component: NewAboutGallerComponent
          },
          {
            path: 'view/:id',
            component: ViewAboutGalleryComponent
          }
        ]
      },
      {
        path: 'about-detail',
        children: [
          {
            path: '',
            component: AboutDetailComponent
          },
          {
            path: 'new',
            component: NewAboutDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewAboutDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewAboutDetailComponent
          }
        ]
      },
      {
        path: 'about-list',
        children: [
          {
            path: '',
            component: AboutListComponent
          },
          {
            path: 'new',
            component: NewAboutListComponent
          },
          {
            path: 'edit/:id',
            component: NewAboutListComponent
          },
          {
            path: 'view/:id',
            component: ViewAboutListComponent
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
export class AboutUsRoutingModule { }
