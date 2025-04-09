import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: FacilitiesComponent,
    children: [
      {
        path: 'facilities-banner',
        children: [
          {
            path: '',
            component: FacilityBannerComponent
          },
          {
            path: 'new',
            component: NewFacilityBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewFacilityBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewFacilityBannerComponent
          }
        ]
      },
      {
        path: 'facilities-category',
        children: [
          {
            path: '',
            component: FacilitiesCategoryComponent
          },
          {
            path: 'new',
            component: NewFacilitiesCategoryComponent
          },
          {
            path: 'edit/:id',
            component: NewFacilitiesCategoryComponent
          },
          {
            path: 'view/:id',
            component: ViewFacilitiesCategoryComponent
          }
        ]
      },
      {
        path: 'facilities-detail',
        children: [
          {
            path: '',
            component: FacilitiesDetailComponent
          },
          {
            path: 'new',
            component: NewFacilitiesDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewFacilitiesDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewFacilitiesDetailComponent
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
export class FacilitiesRoutingModule { }
