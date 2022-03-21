import { TestBed } from '@angular/core/testing';

import { PacotesServiceService } from './pacotes.service';

describe('PacotesServiceService', () => {
  let service: PacotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
