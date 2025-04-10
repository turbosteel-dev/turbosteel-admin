import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'chairman',
    loadChildren: () => import('./components/chairman/chairman.module').then(m => m.ChairmanModule)
  },
  {
    path: 'erm',
    loadChildren: () => import('./components/erm-overview/erm-overview.module').then(m => m.ErmOverviewModule)
  },
  {
    path: 'csr',
    loadChildren: () => import('./components/csr-activity/csr-activity.module').then(m => m.CsrActivityModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./components/media/media.module').then(m => m.MediaModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'facilities',
    loadChildren: () => import('./components/facilities/facilities.module').then(m => m.FacilitiesModule)
  },
  {
    path: 'certification',
    loadChildren: () => import('./components/certification/certification.module').then(m => m.CertificationModule)
  },
  {
    path: 'product-feature',
    loadChildren: () => import('./components/product-feature/product-feature.module').then(m => m.ProductFeatureModule)
  },
  {
    path: 'turbosteel-advantage',
    loadChildren: () => import('./components/tubosteel-advantage/tubosteel-advantage.module').then(m => m.TubosteelAdvantageModule)
  },
  {
    path: 'manufacture-process',
    loadChildren: () => import('./components/m-process/m-process.module').then(m => m.MProcessModule)
  },
  {
    path: 'inhouse',
    loadChildren: () => import('./components/in-house/in-house.module').then(m => m.InHouseModule)
  },
  {
    path: 'cuttingedge',
    loadChildren: () => import('./components/cutting-edge/cutting-edge.module').then(m => m.CuttingEdgeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
