import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { NewAboutHeaderComponent } from './components/new-about-header/new-about-header.component';
import { ViewAboutHeaderComponent } from './components/view-about-header/view-about-header.component';
import { TurbosteelHeaderComponent } from './components/turbosteel-header/turbosteel-header.component';
import { NewTurbosteelHeaderComponent } from './components/new-turbosteel-header/new-turbosteel-header.component';
import { ViewTurbosteelHeaderComponent } from './components/view-turbosteel-header/view-turbosteel-header.component';
import { RegistrationHeaderComponent } from './components/registration-header/registration-header.component';
import { NewRegistrationComponent } from '../home/components/new-registration/new-registration.component';
import { NewRegistrationHeaderComponent } from './components/new-registration-header/new-registration-header.component';
import { ViewRegistrationHeaderComponent } from './components/view-registration-header/view-registration-header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'about-header',
        children: [
          {
            path: '',
            component: AboutHeaderComponent
          },
          {
            path: 'new',
            component: NewAboutHeaderComponent
          },
          {
            path: 'edit/:id',
            component: NewAboutHeaderComponent
          },
          {
            path: 'view/:id',
            component: ViewAboutHeaderComponent
          }
        ]
      },
      {
        path: 'turbosteel-header',
        children: [
          {
            path: '',
            component: TurbosteelHeaderComponent
          },
          {
            path: 'new',
            component: NewTurbosteelHeaderComponent
          },
          {
            path: 'edit/:id',
            component: NewTurbosteelHeaderComponent
          },
          {
            path: 'view/:id',
            component: ViewTurbosteelHeaderComponent
          }
        ]
      },
      {
        path: 'registration-header',
        children: [
          {
            path: '',
            component: RegistrationHeaderComponent
          },
          {
            path: 'new',
            component: NewRegistrationHeaderComponent
          },
          {
            path: 'edit/:id',
            component: NewRegistrationHeaderComponent
          },
          {
            path: 'view/:id',
            component: ViewRegistrationHeaderComponent
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
export class HeaderRoutingModule { }
