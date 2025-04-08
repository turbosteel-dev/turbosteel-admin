import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChairmanComponent } from './chairman.component';
import { ChairmanBannerComponent } from './components/chairman-banner/chairman-banner.component';
import { NewChairmanBannerComponent } from './components/new-chairman-banner/new-chairman-banner.component';
import { ViewChairmanMessageComponent } from './components/view-chairman-message/view-chairman-message.component';
import { ChairmanDetailComponent } from './components/chairman-detail/chairman-detail.component';
import { NewChairmanDetailComponent } from './components/new-chairman-detail/new-chairman-detail.component';
import { ViewChairmanDetailComponent } from './components/view-chairman-detail/view-chairman-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ChairmanComponent,
    children: [
      {
        path: 'chairman-banner',
        children: [
          {
            path: '',
            component: ChairmanBannerComponent
          },
          {
            path: 'new',
            component: NewChairmanBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewChairmanBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewChairmanMessageComponent
          }
        ]
      },
      {
        path: 'chairman-detail',
        children: [
          {
            path: '',
            component: ChairmanDetailComponent
          },
          {
            path: 'new',
            component: NewChairmanDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewChairmanDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewChairmanDetailComponent
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
export class ChairmanRoutingModule { }
