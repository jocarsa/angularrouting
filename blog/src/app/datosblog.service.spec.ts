import { TestBed } from '@angular/core/testing';

import { DatosblogService } from './datosblog.service';

describe('DatosblogService', () => {
  let service: DatosblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
