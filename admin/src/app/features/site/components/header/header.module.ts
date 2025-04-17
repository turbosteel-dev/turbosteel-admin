import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { NewAboutHeaderComponent } from './components/new-about-header/new-about-header.component';
import { ViewAboutHeaderComponent } from './components/view-about-header/view-about-header.component';
import { TurbosteelHeaderComponent } from './components/turbosteel-header/turbosteel-header.component';
import { NewTurbosteelHeaderComponent } from './components/new-turbosteel-header/new-turbosteel-header.component';
import { ViewTurbosteelHeaderComponent } from './components/view-turbosteel-header/view-turbosteel-header.component';
import { RegistrationHeaderComponent } from './components/registration-header/registration-header.component';
import { NewRegistrationHeaderComponent } from './components/new-registration-header/new-registration-header.component';
import { ViewRegistrationHeaderComponent } from './components/view-registration-header/view-registration-header.component';
import { SharedModule } from 'src/app/features/shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    AboutHeaderComponent,
    NewAboutHeaderComponent,
    ViewAboutHeaderComponent,
    TurbosteelHeaderComponent,
    NewTurbosteelHeaderComponent,
    ViewTurbosteelHeaderComponent,
    RegistrationHeaderComponent,
    NewRegistrationHeaderComponent,
    ViewRegistrationHeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    SharedModule
  ]
})
export class HeaderModule { }
