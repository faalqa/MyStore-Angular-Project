import { TestBed } from '@angular/core/testing';

import { ShowProductService } from './show-product.service';

describe('ShowProductService', () => {
  let service: ShowProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
