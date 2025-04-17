import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsBannerRoutingModule } from './forms-banner-routing.module';
import { SharedModule } from 'src/app/features/shared/shared.module';
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

@NgModule({
  declarations: [
    ArchitectsComponent,
    NewArchitectsComponent,
    ViewArchitectsComponent,
    DealershipComponent,
    NewDealershipComponent,
    ViewDealershipComponent,
    MasonsComponent,
    NewMasonsComponent,
    ViewMasonsComponent,
    IndiviualFormBannerComponent,
    NewIndiviualFormBannerComponent,
    ViewIndiviualFormBannerComponent,
  ],
  imports: [
    CommonModule,
    FormsBannerRoutingModule,
    SharedModule,
    
  ]
})
export class FormsBannerModule { }
