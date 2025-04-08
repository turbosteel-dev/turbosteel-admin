import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { NewContactBannerComponent } from './components/new-contact-banner/new-contact-banner.component';
import { ViewContactBannerComponent } from './components/view-contact-banner/view-contact-banner.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { NewContactDetailComponent } from './components/new-contact-detail/new-contact-detail.component';
import { ViewContctDetailsComponent } from './components/view-contct-details/view-contct-details.component';
import { ContactMapComponent } from './components/contact-map/contact-map.component';
import { NewContactMapComponent } from './components/new-contact-map/new-contact-map.component';
import { ViewContactMapComponent } from './components/view-contact-map/view-contact-map.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactBannerComponent,
    NewContactBannerComponent,
    ViewContactBannerComponent,
    ContactDetailComponent,
    NewContactDetailComponent,
    ViewContctDetailsComponent,
    ContactMapComponent,
    NewContactMapComponent,
    ViewContactMapComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
