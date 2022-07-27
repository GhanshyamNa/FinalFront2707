import { TestBed } from '@angular/core/testing';

import { LoanDisburseService } from './loan-disburse.service';

describe('LoanDisburseService', () => {
  let service: LoanDisburseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanDisburseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
