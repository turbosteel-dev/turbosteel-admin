import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationRoutingModule } from './certification-routing.module';
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
import { SharedModule } from 'src/app/features/shared/shared.module';


@NgModule({
  declarations: [
    CertificationComponent,
    CertificationBannerComponent,
    NewCertificationBannerComponent,
    ViewCertificationBannerComponent,
    CertificationCategoryComponent,
    NewCertificationCategoryComponent,
    ViewCertificationCategoryComponent,
    CertificationDetailComponent,
    NewCertificationDetailComponent,
    ViewCertificationDetailComponent
  ],
  imports: [
    CommonModule,
    CertificationRoutingModule,
    SharedModule
  ]
})
export class CertificationModule { }
