import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career.component';
import { CareerBannerComponent } from './components/career-banner/career-banner.component';
import { NewCareerBannerComponent } from './components/new-career-banner/new-career-banner.component';
import { ViewCareerBannerComponent } from './components/view-career-banner/view-career-banner.component';
import { CareerListComponent } from './components/career-list/career-list.component';
import { NewCareerListComponent } from './components/new-career-list/new-career-list.component';
import { ViewCareerListComponent } from './components/view-career-list/view-career-list.component';

const routes: Routes = [
  {
    path: '',
    component: CareerComponent,
    children: [
      {
        path: 'career-banner',
        children: [
          {
            path: '',
            component: CareerBannerComponent
          },
          {
            path: 'new',
            component: NewCareerBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewCareerBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewCareerBannerComponent
          }
        ]
      },
      {
        path: 'career-list',
        children: [
          {
            path: '',
            component: CareerListComponent
          },
          {
            path: 'new',
            component: NewCareerListComponent
          },
          {
            path: 'edit/:id',
            component: NewCareerListComponent
          },
          {
            path: 'view/:id',
            component: ViewCareerListComponent
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
export class CareerRoutingModule { }
