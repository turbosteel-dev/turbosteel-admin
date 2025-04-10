import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationComponent } from './certification.component';
import { CertificationBannerComponent } from './components/certification-banner/certification-banner.component';
import { NewCertificationBannerComponent } from './components/new-certification-banner/new-certification-banner.component';
import { ViewCertificationBannerComponent } from './components/view-certification-banner/view-certification-banner.component';
import { CertificationCategoryComponent } from './components/certification-category/certification-category.component';
import { NewCertificationCategoryComponent } from './components/new-certification-category/new-certification-category.component';
import { ViewCertificationCategoryComponent } from './components/view-certification-category/view-certification-category.component';
import { CertificationDetailComponent } from './components/certification-detail/certification-detail.component';
import { NewCertificationDetailComponent } from './components/new-certification-detail/new-certification-detail.component';
import { ViewCertificationDetailComponent } from './components/view-certification-detail/view-certification-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CertificationComponent,
    children: [
      {
        path: 'certification-banner',
        children: [
          {
            path: '',
            component: CertificationBannerComponent
          },
          {
            path: 'new',
            component: NewCertificationBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewCertificationBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewCertificationBannerComponent
          }
        ]
      },
      {
        path: 'certification-category',
        children: [
          {
            path: '',
            component: CertificationCategoryComponent
          },
          {
            path: 'new',
            component: NewCertificationCategoryComponent
          },
          {
            path: 'edit/:id',
            component: NewCertificationCategoryComponent
          },
          {
            path: 'view/:id',
            component: ViewCertificationCategoryComponent
          }
        ]
      },
      {
        path: 'certification-detail',
        children: [
          {
            path: '',
            component: CertificationDetailComponent
          },
          {
            path: 'new',
            component: NewCertificationDetailComponent
          },
          {
            path: 'edit/:id',
            component: NewCertificationDetailComponent
          },
          {
            path: 'view/:id',
            component: ViewCertificationDetailComponent
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
export class CertificationRoutingModule { }
