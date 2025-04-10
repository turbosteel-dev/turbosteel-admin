import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InHouseComponent } from './in-house.component';
import { InHouseBannerComponent } from './components/in-house-banner/in-house-banner.component';
import { NewInHouseBannerComponent } from './components/new-in-house-banner/new-in-house-banner.component';
import { ViewInHouseDetailComponent } from './components/view-in-house-detail/view-in-house-detail.component';
import { ViewInHouseBannerComponent } from './components/view-in-house-banner/view-in-house-banner.component';
import { InHouseDetailComponent } from './components/in-house-detail/in-house-detail.component';
import { NewInHouseDetailComponent } from './components/new-in-house-detail/new-in-house-detail.component';

const routes: Routes = [
  {
    path: '',
    component: InHouseComponent,
    children: [
      {
        path: 'inhouse-banner',
        children: [
          {
            path: '',
            component: InHouseBannerComponent
          },
          {
            path: 'new',
            component: NewInHouseBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewInHouseBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewInHouseBannerComponent
          }
        ]
      },
      {
        path: 'inhouse-detail',
        children: [
          {
            path: '',
            component: InHouseDetailComponent
          },
          {
            path: 'new',
            component: NewInHouseDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewInHouseDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewInHouseDetailComponent
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
export class InHouseRoutingModule { }
