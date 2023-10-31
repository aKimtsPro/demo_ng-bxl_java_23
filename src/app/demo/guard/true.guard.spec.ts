import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { trueGuard } from './true.guard';

describe('trueGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => trueGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
