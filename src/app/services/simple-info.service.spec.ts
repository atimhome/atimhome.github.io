import { TestBed } from '@angular/core/testing';

import { SimpleInfoService } from './simple-info.service';

describe('SimpleInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleInfoService = TestBed.get(SimpleInfoService);
    expect(service).toBeTruthy();
  });
});
