import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductBannerComponent } from './components/product-banner/product-banner.component';
import { NewProductBannerComponent } from './components/new-product-banner/new-product-banner.component';
import { ViewProductBannerComponent } from './components/view-product-banner/view-product-banner.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';
import { NewProductDetailComponent } from './components/new-product-detail/new-product-detail.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductBannerComponent,
    NewProductBannerComponent,
    ViewProductBannerComponent,
    ProductDetailComponent,
    ViewProductDetailComponent,
    NewProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
