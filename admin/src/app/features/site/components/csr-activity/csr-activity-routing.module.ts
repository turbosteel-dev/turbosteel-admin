import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsrActivityComponent } from './csr-activity.component';
import { CsrBannerComponent } from './components/csr-banner/csr-banner.component';
import { NewCsrBannerComponent } from './components/new-csr-banner/new-csr-banner.component';
import { ViewCsrBannerComponent } from './components/view-csr-banner/view-csr-banner.component';
import { CsrCategoryComponent } from './components/csr-category/csr-category.component';
import { NewCsrCategoryComponent } from './components/new-csr-category/new-csr-category.component';
import { ViewCsrCategoryComponent } from './components/view-csr-category/view-csr-category.component';
import { CsrImageComponent } from './components/csr-image/csr-image.component';
import { NewCsrImageComponent } from './components/new-csr-image/new-csr-image.component';
import { ViewCsrImageComponent } from './components/view-csr-image/view-csr-image.component';

const routes: Routes = [
  {
    path: '',
    component: CsrActivityComponent,
    children: [
      {
        path: 'csr-banner',
        children: [
          {
            path: '',
            component: CsrBannerComponent
          },
          {
            path: 'new',
            component: NewCsrBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewCsrBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewCsrBannerComponent
          }
        ]
      },
      {
        path: 'csr-category',
        children: [
          {
            path: '',
            component: CsrCategoryComponent
          },
          {
            path: 'new',
            component: NewCsrCategoryComponent
          },
          {
            path: 'edit/:id',
            component: NewCsrCategoryComponent
          },
          {
            path: 'view/:id',
            component: ViewCsrCategoryComponent
          }
        ]
      },
      {
        path: 'csr-image',
        children: [
          {
            path: '',
            component: CsrImageComponent
          },
          {
            path: 'new',
            component: NewCsrImageComponent
          },
          {
            path: 'edit/:id',
            component: NewCsrImageComponent
          },
          {
            path: 'view/:id',
            component: ViewCsrImageComponent
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
export class CsrActivityRoutingModule { }
