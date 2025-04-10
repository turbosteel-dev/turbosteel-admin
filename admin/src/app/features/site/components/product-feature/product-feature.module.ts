import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFeatureRoutingModule } from './product-feature-routing.module';
import { ProductFeatureComponent } from './product-feature.component';
import { ProductFeatureBannerComponent } from './components/product-feature-banner/product-feature-banner.component';
import { NewProductFeatureBannerComponent } from './components/new-product-feature-banner/new-product-feature-banner.component';
import { ViewProductFeatureBannerComponent } from './components/view-product-feature-banner/view-product-feature-banner.component';
import { ProductFeatureDetailComponent } from './components/product-feature-detail/product-feature-detail.component';
import { NewProductFeatureDetailComponent } from './components/new-product-feature-detail/new-product-feature-detail.component';
import { ViewProductFeatureDetailComponent } from './components/view-product-feature-detail/view-product-feature-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    ProductFeatureComponent,
    ProductFeatureBannerComponent,
    NewProductFeatureBannerComponent,
    ViewProductFeatureBannerComponent,
    ProductFeatureDetailComponent,
    NewProductFeatureDetailComponent,
    ViewProductFeatureDetailComponent
  ],
  imports: [
    CommonModule,
    ProductFeatureRoutingModule,
    SharedModule
  ]
})
export class ProductFeatureModule { }
