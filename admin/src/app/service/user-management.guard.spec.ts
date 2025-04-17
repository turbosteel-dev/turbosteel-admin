import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userManagementGuard } from './user-management.guard';

describe('userManagementGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userManagementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
