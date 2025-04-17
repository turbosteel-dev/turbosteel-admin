import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { ForgotPasswordComponent } from './common/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './common/reset-password/reset-password.component';
import { authGuardGuard } from './service/auth.guard';
import { userManagementGuard } from './service/user-management.guard';

const routes: Routes = [
  {
    path: 'site',
    loadChildren: () => import('./features/site/site.module').then(m => m.SiteModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'price-tag',
    loadChildren: () => import('./features/price-tag/price-tag.module').then(m => m.PriceTagModule),
    canActivate: [userManagementGuard]
  },
  {
    path: 'individual-house',
    loadChildren: () => import('./features/indiviual-house/indiviual-house.module').then(m => m.IndiviualHouseModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'architects',
    loadChildren: () => import('./features/architect/architect.module').then(m => m.ArchitectModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'distributors',
    loadChildren: () => import('./features/distributors/distributors.module').then(m => m.DistributorsModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'masons',
    loadChildren: () => import('./features/masons/masons.module').then(m => m.MasonsModule),
    canActivate: [authGuardGuard]
  },
  {
    path: 'dealership',
    loadChildren: () => import('./features/dealership/dealership.module').then(m => m.DealershipModule),
    canActivate: [authGuardGuard]
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
