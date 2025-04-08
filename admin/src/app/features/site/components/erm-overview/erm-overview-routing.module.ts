import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErmOverviewComponent } from './erm-overview.component';
import { ErmBannerComponent } from './components/erm-banner/erm-banner.component';
import { NewErmBannerComponent } from './components/new-erm-banner/new-erm-banner.component';
import { ViewErmBannerComponent } from './components/view-erm-banner/view-erm-banner.component';
import { ErmDetailComponent } from './components/erm-detail/erm-detail.component';
import { NewErmDetailComponent } from './components/new-erm-detail/new-erm-detail.component';
import { ViewErmDetailComponent } from './components/view-erm-detail/view-erm-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ErmOverviewComponent,
    children: [
      {
        path: 'erm-banner',
        children: [
          {
            path: '',
            component: ErmBannerComponent
          },
          {
            path: 'new',
            component: NewErmBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewErmBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewErmBannerComponent
          }
        ]
      },
      {
        path: 'erm-detail',
        children: [
          {
            path: '',
            component: ErmDetailComponent
          },
          {
            path: 'new',
            component: NewErmDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewErmDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewErmDetailComponent
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
export class ErmOverviewRoutingModule { }
