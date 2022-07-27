import { TestBed } from '@angular/core/testing';

import { LoanApprovedListService } from './loan-approved-list.service';

describe('LoanApprovedListService', () => {
  let service: LoanApprovedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanApprovedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
