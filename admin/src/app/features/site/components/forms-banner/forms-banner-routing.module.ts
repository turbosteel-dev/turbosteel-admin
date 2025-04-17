import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsBannerComponent } from './forms-banner.component';
import { ArchitectsComponent } from './components/architects/architects.component';
import { NewArchitectsComponent } from './components/new-architects/new-architects.component';
import { ViewArchitectsComponent } from './components/view-architects/view-architects.component';
import { DealershipComponent } from './components/dealership/dealership.component';
import { NewDealershipComponent } from './components/new-dealership/new-dealership.component';
import { ViewDealershipComponent } from './components/view-dealership/view-dealership.component';
import { MasonsComponent } from './components/masons/masons.component';
import { NewMasonsComponent } from './components/new-masons/new-masons.component';
import { ViewMasonsComponent } from './components/view-masons/view-masons.component';
import { IndiviualFormBannerComponent } from './components/indiviual-form-banner/indiviual-form-banner.component';
import { NewIndiviualFormBannerComponent } from './components/new-indiviual-form-banner/new-indiviual-form-banner.component';
import { ViewIndiviualFormBannerComponent } from './components/view-indiviual-form-banner/view-indiviual-form-banner.component';

const routes: Routes = [
  {
    path: '',
    component: FormsBannerComponent,
    children: [
      {
        path: 'indiviual-form-banner',
        children: [
          {
            path: '',
            component: IndiviualFormBannerComponent
          },
          {
            path: 'new',
            component: NewIndiviualFormBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewIndiviualFormBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewIndiviualFormBannerComponent
          }
        ]
      },
      {
        path: 'architects-banner',
        children: [
          {
            path: '',
            component: ArchitectsComponent
          },
          {
            path: 'new',
            component: NewArchitectsComponent
          },
          {
            path: 'edit/:id',
            component: NewArchitectsComponent
          },
          {
            path: 'view/:id',
            component: ViewArchitectsComponent
          }
        ]
      },
      {
        path: 'dealership-banner',
        children: [
          {
            path: '',
            component: DealershipComponent
          },
          {
            path: 'new',
            component: NewDealershipComponent
          },
          {
            path: 'edit/:id',
            component: NewDealershipComponent
          },
          {
            path: 'view/:id',
            component: ViewDealershipComponent
          }
        ]
      },
      {
        path: 'masons-banner',
        children: [
          {
            path: '',
            component: MasonsComponent
          },
          {
            path: 'new',
            component: NewMasonsComponent
          },
          {
            path: 'edit/:id',
            component: NewMasonsComponent
          },
          {
            path: 'view/:id',
            component: ViewMasonsComponent
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
export class FormsBannerRoutingModule { }
