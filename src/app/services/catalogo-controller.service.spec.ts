import { TestBed } from '@angular/core/testing';

import { CatalogoControllerService } from './catalogo-controller.service';

describe('CatalogoControllerService', () => {
  let service: CatalogoControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogoControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
