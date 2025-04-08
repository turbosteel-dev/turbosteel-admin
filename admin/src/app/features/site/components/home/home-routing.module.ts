import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewBannerComponent } from './components/new-banner/new-banner.component';
import { ViewBannerComponent } from './components/view-banner/view-banner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NewAboutUsComponent } from './components/new-about-us/new-about-us.component';
import { ViewAboutUsComponent } from './components/view-about-us/view-about-us.component';
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
import { NewGalleryComponent } from './components/new-gallery/new-gallery.component';
import { ViewGalleryComponent } from './components/view-gallery/view-gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewTestimonilsComponent } from './components/new-testimonils/new-testimonils.component';
import { ViewTestimonialsComponent } from './components/view-testimonials/view-testimonials.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { NewNewsletterComponent } from './components/new-newsletter/new-newsletter.component';
import { ViewNewsletterComponent } from './components/view-newsletter/view-newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewFooterComponent } from './components/new-footer/new-footer.component';
import { ViewFooterComponent } from './components/view-footer/view-footer.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { NewQuickLinksComponent } from './components/new-quick-links/new-quick-links.component';
import { ViewQuickLinksComponent } from './components/view-quick-links/view-quick-links.component';
import { AddressComponent } from './components/address/address.component';
import { NewAddressComponent } from './components/new-address/new-address.component';
import { ViewAddressComponent } from './components/view-address/view-address.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { NewSocialMediaComponent } from './components/new-social-media/new-social-media.component';
import { ViewSocialMediaComponent } from './components/view-social-media/view-social-media.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'banner',
        children: [
          {
            path: '',
            component: BannerComponent
          },
          {
            path: 'new',
            component: NewBannerComponent
          },
          {
            path: 'edit/:id',
            component: NewBannerComponent
          },
          {
            path: 'view/:id',
            component: ViewBannerComponent
          }
        ]
      },
      {
        path: 'about-us',
        children: [
          {
            path: '',
            component: AboutUsComponent
          },
          {
            path: 'new',
            component: NewAboutUsComponent
          },
          {
            path: 'edit/:id',
            component: NewAboutUsComponent
          },
          {
            path: 'view/:id',
            component: ViewAboutUsComponent 
          }
        ]
      },
      {
        path: 'product-list',
        children: [
          {
            path: '',
            component: ProductListComponent
          },
          {
            path: 'new',
            component: NewProductListComponent
          },
          {
            path: 'edit/:id',
            component: NewProductListComponent
          },
          {
            path: 'view/:id',
            component: ViewProductListComponent 
          }
        ]
      },
      {
        path: 'techology-list',
        children: [
          {
            path: '',
            component: TechnologyListComponent
          },
          {
            path: 'new',
            component: NewTechnologyListComponent
          },
          {
            path: 'edit/:id',
            component: NewTechnologyListComponent
          },
          {
            path: 'view/:id',
            component: ViewTechnologyListComponent 
          }
        ]
      },
      {
        path: 'registration',
        children: [
          {
            path: '',
            component: RegistrationComponent
          },
          {
            path: 'new',
            component: NewRegistrationComponent
          },
          {
            path: 'edit/:id',
            component: NewRegistrationComponent
          },
          {
            path: 'view/:id',
            component: ViewRegistrationComponent 
          }
        ]
      },
      {
        path: 'faq',
        children: [
          {
            path: '',
            component: FaqComponent
          },
          {
            path: 'new',
            component: NewFaqComponent
          },
          {
            path: 'edit/:id',
            component: NewFaqComponent
          },
          {
            path: 'view/:id',
            component: ViewFaqComponent 
          }
        ]
      },
      {
        path: 'gallery',
        children: [
          {
            path: '',
            component: GalleryComponent
          },
          {
            path: 'new',
            component: NewGalleryComponent
          },
          {
            path: 'edit/:id',
            component: NewGalleryComponent
          },
          {
            path: 'view/:id',
            component: ViewGalleryComponent 
          }
        ]
      },
      {
        path: 'testimonials',
        children: [
          {
            path: '',
            component: TestimonialsComponent
          },
          {
            path: 'new',
            component: NewTestimonilsComponent
          },
          {
            path: 'edit/:id',
            component: NewTestimonilsComponent
          },
          {
            path: 'view/:id',
            component: ViewTestimonialsComponent 
          }
        ]
      },
      {
        path: 'news-letter',
        children: [
          {
            path: '',
            component: NewsletterComponent
          },
          {
            path: 'new',
            component: NewNewsletterComponent
          },
          {
            path: 'edit/:id',
            component: NewNewsletterComponent
          },
          {
            path: 'view/:id',
            component: ViewNewsletterComponent 
          }
        ]
      },
      {
        path: 'footer',
        children: [
          {
            path: '',
            component: FooterComponent
          },
          {
            path: 'new',
            component: NewFooterComponent
          },
          {
            path: 'edit/:id',
            component: NewFooterComponent
          },
          {
            path: 'view/:id',
            component: ViewFooterComponent 
          }
        ]
      },
      {
        path: 'quick-links',
        children: [
          {
            path: '',
            component: QuickLinksComponent
          },
          {
            path: 'new',
            component: NewQuickLinksComponent
          },
          {
            path: 'edit/:id',
            component: NewQuickLinksComponent
          },
          {
            path: 'view/:id',
            component: ViewQuickLinksComponent 
          }
        ]
      },
      {
        path: 'address',
        children: [
          {
            path: '',
            component: AddressComponent
          },
          {
            path: 'new',
            component: NewAddressComponent
          },
          {
            path: 'edit/:id',
            component: NewAddressComponent
          },
          {
            path: 'view/:id',
            component: ViewAddressComponent 
          }
        ]
      },
      {
        path: 'social-media',
        children: [
          {
            path: '',
            component: SocialMediaComponent
          },
          {
            path: 'new',
            component: NewSocialMediaComponent
          },
          {
            path: 'edit/:id',
            component: NewSocialMediaComponent
          },
          {
            path: 'view/:id',
            component: ViewSocialMediaComponent 
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
export class HomeRoutingModule { }
