import { TestBed } from '@angular/core/testing';

import { OrderphotoService } from './orderphoto.service';

describe('OrderphotoService', () => {
  let service: OrderphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
