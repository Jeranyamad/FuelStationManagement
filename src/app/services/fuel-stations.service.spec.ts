import { TestBed } from '@angular/core/testing';

import { FuelStationsService } from './fuel-stations.service';

describe('FuelStationsService', () => {
  let service: FuelStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
