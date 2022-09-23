import { TestBed } from '@angular/core/testing';

import { ServiceRickandMortyService } from './service-rickand-morty.service';

describe('ServiceRickandMortyService', () => {
  let service: ServiceRickandMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRickandMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
