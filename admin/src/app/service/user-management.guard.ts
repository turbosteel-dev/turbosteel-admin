import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const userManagementGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userRole = localStorage.getItem('userRole');

  if (userRole === 'superAdmin') {
    return true;
  }

  router.navigate(['/site']);
  return false;
};
