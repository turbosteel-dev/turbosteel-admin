import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuttingEdgeComponent } from './cutting-edge.component';
import { CuttingedgeBannerComponent } from './component/cuttingedge-banner/cuttingedge-banner.component';
import { NewCuttingedgeBannerComponent } from './component/new-cuttingedge-banner/new-cuttingedge-banner.component';
import { ViewCuttingedgeBannerComponent } from './component/view-cuttingedge-banner/view-cuttingedge-banner.component';
import { CuttingedgeDetailComponent } from './component/cuttingedge-detail/cuttingedge-detail.component';
import { NewCuttingedgeDetailComponent } from './component/new-cuttingedge-detail/new-cuttingedge-detail.component';
import { ViewCuttingedgeDetailComponent } from './component/view-cuttingedge-detail/view-cuttingedge-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CuttingEdgeComponent,
    children: [
      {
        path: 'cuttingedge-banner',
        children: [
          {
            path: '',
            component: CuttingedgeBannerComponent
          },
          {
            path: 'new',
            component: NewCuttingedgeBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewCuttingedgeBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewCuttingedgeBannerComponent
          }
        ]
      },
      {
        path: 'cuttingedge-detail',
        children: [
          {
            path: '',
            component: CuttingedgeDetailComponent
          },
          {
            path: 'new',
            component: NewCuttingedgeDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewCuttingedgeDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewCuttingedgeDetailComponent
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
export class CuttingEdgeRoutingModule { }
