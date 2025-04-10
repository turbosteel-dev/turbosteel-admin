import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsaBannerComponent } from './components/tsa-banner/tsa-banner.component';
import { NewTsaBannerComponent } from './components/new-tsa-banner/new-tsa-banner.component';
import { ViewTsaBannerComponent } from './components/view-tsa-banner/view-tsa-banner.component';
import { TsaListComponent } from './components/tsa-list/tsa-list.component';
import { NewTsaListComponent } from './components/new-tsa-list/new-tsa-list.component';
import { ViewTsaListComponent } from './components/view-tsa-list/view-tsa-list.component';
import { TubosteelAdvantageComponent } from './tubosteel-advantage.component';

const routes: Routes = [
  {
    path: '',
    component: TubosteelAdvantageComponent,
    children: [
      {
        path: 'turbosteel-banner',
        children: [
          {
            path: '',
            component: TsaBannerComponent
          },
          {
            path: 'new',
            component: NewTsaBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewTsaBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewTsaBannerComponent
          }
        ]
      },
      {
        path: 'turbosteel-list',
        children: [
          {
            path: '',
            component: TsaListComponent
          },
          {
            path: 'new',
            component: NewTsaListComponent
          },
          {
            path: 'edit/:id',
            component: NewTsaListComponent
          },
          {
            path: 'view/:id',
            component: ViewTsaListComponent
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
export class TubosteelAdvantageRoutingModule { }
