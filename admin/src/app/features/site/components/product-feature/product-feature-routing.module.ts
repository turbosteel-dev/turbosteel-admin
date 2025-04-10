import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFeatureComponent } from './product-feature.component';
import { ProductFeatureBannerComponent } from './components/product-feature-banner/product-feature-banner.component';
import { NewProductFeatureBannerComponent } from './components/new-product-feature-banner/new-product-feature-banner.component';
import { ViewProductFeatureBannerComponent } from './components/view-product-feature-banner/view-product-feature-banner.component';
import { ProductFeatureDetailComponent } from './components/product-feature-detail/product-feature-detail.component';
import { NewProductFeatureDetailComponent } from './components/new-product-feature-detail/new-product-feature-detail.component';
import { ViewProductFeatureDetailComponent } from './components/view-product-feature-detail/view-product-feature-detail.component';

const routes: Routes = [
    {
      path: '',
      component: ProductFeatureComponent,
      children: [
        {
          path: 'product-feature-banner',
          children: [
            {
              path: '',
              component: ProductFeatureBannerComponent
            },
            {
              path: 'new',
              component: NewProductFeatureBannerComponent
            },
            {
              path: 'edit/:id',
              component: NewProductFeatureBannerComponent
            },
            {
              path: 'view/:id',
              component: ViewProductFeatureBannerComponent
            }
          ]
        },
        {
          path: 'product-feature-detail',
          children: [
            {
              path: '',
              component: ProductFeatureDetailComponent
            },
            {
              path: 'new',
              component: NewProductFeatureDetailComponent
            },
            {
              path: 'edit/:id',
              component: NewProductFeatureDetailComponent
            },
            {
              path: 'view/:id',
              component: ViewProductFeatureDetailComponent
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
export class ProductFeatureRoutingModule { }
