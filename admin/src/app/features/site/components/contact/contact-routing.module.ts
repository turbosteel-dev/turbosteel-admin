import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
      path: '',
      component: ContactComponent,
      children: [
        {
          path: 'contact-banner',
          children: [
            {
              path: '',
              component: ContactBannerComponent
            },
            {
              path: 'new',
              component: NewContactBannerComponent
            },
            {
              path: 'edit/:id',
              component: NewContactBannerComponent
            },
            {
              path: 'view/:id',
              component: ViewContactBannerComponent
            }
          ]
        },
        {
          path: 'contact-details',
          children: [
            {
              path: '',
              component: ContactDetailComponent
            },
            {
              path: 'new',
              component: NewContactDetailComponent
            },
            {
              path: 'edit/:id',
              component: NewContactDetailComponent
            },
            {
              path: 'view/:id',
              component: ViewContctDetailsComponent
            }
          ]
        },
        {
          path: 'contact-map',
          children: [
            {
              path: '',
              component: ContactMapComponent
            },
            {
              path: 'new',
              component: NewContactMapComponent
            },
            {
              path: 'edit/:id',
              component: NewContactMapComponent
            },
            {
              path: 'view/:id',
              component: ViewContactMapComponent
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
export class ContactRoutingModule { }
