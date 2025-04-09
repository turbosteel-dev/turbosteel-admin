import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductBannerComponent } from './components/product-banner/product-banner.component';
import { NewProductBannerComponent } from './components/new-product-banner/new-product-banner.component';
import { ViewProductBannerComponent } from './components/view-product-banner/view-product-banner.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NewProductDetailComponent } from './components/new-product-detail/new-product-detail.component';
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';

const routes: Routes = [
   {
      path: '',
      component: ProductsComponent,
      children: [
        {
          path: 'product-banner',
          children: [
            {
              path: '',
              component: ProductBannerComponent
            },
            {
              path: 'new',
              component: NewProductBannerComponent
            },
            {
              path: 'edit/:id',
              component: NewProductBannerComponent
            },
            {
              path: 'view/:id',
              component: ViewProductBannerComponent
            }
          ]
        },
        {
          path: 'product-detail',
          children: [
            {
              path: '',
              component: ProductDetailComponent
            },
            {
              path: 'new',
              component: NewProductDetailComponent
            },
            {
              path: 'edit/:id',
              component: NewProductDetailComponent
            },
            {
              path: 'view/:id',
              component: ViewProductDetailComponent
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
export class ProductsRoutingModule { }
