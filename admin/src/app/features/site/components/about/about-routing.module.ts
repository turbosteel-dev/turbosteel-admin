import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { VisionBannerComponent } from './components/vision-banner/vision-banner.component';
import { NewVisionBannerComponent } from './components/new-vision-banner/new-vision-banner.component';
import { ViewVisionBannerComponent } from './components/view-vision-banner/view-vision-banner.component';
import { VisionListComponent } from './components/vision-list/vision-list.component';
import { NewVisionListComponent } from './components/new-vision-list/new-vision-list.component';
import { ViewVisionListComponent } from './components/view-vision-list/view-vision-list.component';

const routes: Routes = [
   {
      path: '',
      component: AboutComponent,
      children: [
        {
          path: 'vision-banner',
          children: [
            {
              path: '',
              component: VisionBannerComponent
            },
            {
              path: 'new',
              component: NewVisionBannerComponent
            },
            {
              path: 'edit/:id',
              component: NewVisionBannerComponent
            },
            {
              path: 'view/:id',
              component: ViewVisionBannerComponent
            }
          ]
        },
        {
          path: 'vision-list',
          children: [
            {
              path: '',
              component: VisionListComponent
            },
            {
              path: 'new',
              component: NewVisionListComponent
            },
            {
              path: 'edit/:id',
              component: NewVisionListComponent
            },
            {
              path: 'view/:id',
              component: ViewVisionListComponent
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
export class AboutRoutingModule { }
