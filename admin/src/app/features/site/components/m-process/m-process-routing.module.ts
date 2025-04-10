import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MProcessComponent } from './m-process.component';
import { MProcessBannerComponent } from './components/m-process-banner/m-process-banner.component';
import { NewMProcessBannerComponent } from './components/new-m-process-banner/new-m-process-banner.component';
import { ViewMProcessBannerComponent } from './components/view-m-process-banner/view-m-process-banner.component';
import { MProcessDetailComponent } from './components/m-process-detail/m-process-detail.component';
import { NewMProcessDetailComponent } from './components/new-m-process-detail/new-m-process-detail.component';
import { ViewMProcessDetailComponent } from './components/view-m-process-detail/view-m-process-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MProcessComponent,
    children: [
      {
        path: 'mprocess-banner',
        children: [
          {
            path: '',
            component: MProcessBannerComponent
          },
          {
            path: 'new',
            component: NewMProcessBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewMProcessBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewMProcessBannerComponent
          }
        ]
      },
      {
        path: 'mprocess-detail',
        children: [
          {
            path: '',
            component: MProcessDetailComponent
          },
          {
            path: 'new',
            component: NewMProcessDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewMProcessDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewMProcessDetailComponent
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
export class MProcessRoutingModule { }
