import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewBannerComponent } from './components/new-banner/new-banner.component';
import { ViewBannerComponent } from './components/view-banner/view-banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewAboutUsComponent } from './components/view-about-us/view-about-us.component';
import { NewAboutUsComponent } from './components/new-about-us/new-about-us.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewProductListComponent } from './components/new-product-list/new-product-list.component';
import { ViewProductListComponent } from './components/view-product-list/view-product-list.component';
import { TechnologyListComponent } from './components/technology-list/technology-list.component';
import { NewTechnologyListComponent } from './components/new-technology-list/new-technology-list.component';
import { ViewTechnologyListComponent } from './components/view-technology-list/view-technology-list.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewFaqComponent } from './components/new-faq/new-faq.component';
import { ViewFaqComponent } from './components/view-faq/view-faq.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ViewGalleryComponent } from './components/view-gallery/view-gallery.component';
import { NewGalleryComponent } from './components/new-gallery/new-gallery.component';
import { NewNewsletterComponent } from './components/new-newsletter/new-newsletter.component';
import { ViewNewsletterComponent } from './components/view-newsletter/view-newsletter.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ViewTestimonialsComponent } from './components/view-testimonials/view-testimonials.component';
import { NewTestimonilsComponent } from './components/new-testimonils/new-testimonils.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewFooterComponent } from './components/view-footer/view-footer.component';
import { NewFooterComponent } from './components/new-footer/new-footer.component';
import { SharedModule } from 'src/app/features/shared/shared.module';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { NewQuickLinksComponent } from './components/new-quick-links/new-quick-links.component';
import { ViewQuickLinksComponent } from './components/view-quick-links/view-quick-links.component';
import { AddressComponent } from './components/address/address.component';
import { NewAddressComponent } from './components/new-address/new-address.component';
import { ViewAddressComponent } from './components/view-address/view-address.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { NewSocialMediaComponent } from './components/new-social-media/new-social-media.component';
import { ViewSocialMediaComponent } from './components/view-social-media/view-social-media.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    NewBannerComponent,
    ViewBannerComponent,
    AboutUsComponent,
    ViewAboutUsComponent,
    NewAboutUsComponent,
    ProductListComponent,
    NewProductListComponent,
    ViewProductListComponent,
    TechnologyListComponent,
    NewTechnologyListComponent,
    ViewTechnologyListComponent,
    RegistrationComponent,
    NewRegistrationComponent,
    ViewRegistrationComponent,
    FaqComponent,
    NewFaqComponent,
    ViewFaqComponent,
    GalleryComponent,
    ViewGalleryComponent,
    NewGalleryComponent,
    NewNewsletterComponent,
    ViewNewsletterComponent,
    NewsletterComponent,
    TestimonialsComponent,
    ViewTestimonialsComponent,
    NewTestimonilsComponent,
    FooterComponent,
    ViewFooterComponent,
    NewFooterComponent,
    QuickLinksComponent,
    NewQuickLinksComponent,
    ViewQuickLinksComponent,
    AddressComponent,
    NewAddressComponent,
    ViewAddressComponent,
    SocialMediaComponent,
    NewSocialMediaComponent,
    ViewSocialMediaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
