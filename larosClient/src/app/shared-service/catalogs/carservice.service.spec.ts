import { TestBed, inject } from '@angular/core/testing';

import { CarserviceService } from './carservice.service';

describe('CarserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarserviceService]
    });
  });

  it('should be created', inject([CarserviceService], (service: CarserviceService) => {
    expect(service).toBeTruthy();
  }));
});
