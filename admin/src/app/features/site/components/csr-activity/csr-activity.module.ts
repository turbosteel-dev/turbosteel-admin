import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsrActivityRoutingModule } from './csr-activity-routing.module';
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
import { SharedModule } from 'src/app/features/shared/shared.module';


@NgModule({
  declarations: [
    CsrActivityComponent,
    CsrBannerComponent,
    NewCsrBannerComponent,
    ViewCsrBannerComponent,
    CsrCategoryComponent,
    NewCsrCategoryComponent,
    ViewCsrCategoryComponent,
    CsrImageComponent,
    NewCsrImageComponent,
    ViewCsrImageComponent
  ],
  imports: [
    CommonModule,
    CsrActivityRoutingModule,
    SharedModule
  ]
})
export class CsrActivityModule { }
