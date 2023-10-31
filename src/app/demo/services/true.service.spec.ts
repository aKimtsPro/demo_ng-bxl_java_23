import { TestBed } from '@angular/core/testing';

import { TrueService } from './true.service';

describe('TrueService', () => {
  let service: TrueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
