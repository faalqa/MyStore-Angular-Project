import { TestBed } from '@angular/core/testing';

import { PaymentInformationService } from './payment-information.service';

describe('PaymentInformationService', () => {
  let service: PaymentInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
