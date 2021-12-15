import { TestBed } from '@angular/core/testing';

import { CatIdeService } from './cat-ide.service';

describe('CatIdeService', () => {
  let service: CatIdeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatIdeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
