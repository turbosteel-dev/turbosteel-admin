import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { ForgotPasswordComponent } from './common/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './common/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'site',
    loadChildren: () => import('./features/site/site.module').then(m => m.SiteModule)
  },
  {
    path: 'price-tag',
    loadChildren: () => import('./features/price-tag/price-tag.module').then(m => m.PriceTagModule)
  },
  {
    path: 'individual-house',
    loadChildren: () => import('./features/indiviual-house/indiviual-house.module').then(m => m.IndiviualHouseModule)
  },
  {
    path: 'distributors',
    loadChildren: () => import('./features/distributors/distributors.module').then(m => m.DistributorsModule)
  },
  {
    path: 'masons',
    loadChildren: () => import('./features/masons/masons.module').then(m => m.MasonsModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
