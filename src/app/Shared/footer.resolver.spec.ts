import { TestBed } from '@angular/core/testing';

import { FooterResolver } from './footer.resolver';

describe('FooterResolver', () => {
  let resolver: FooterResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FooterResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
