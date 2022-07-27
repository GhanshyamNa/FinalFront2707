import { TestBed } from '@angular/core/testing';

import { CibilServiceService } from './cibil-service.service';

describe('CibilServiceService', () => {
  let service: CibilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CibilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
