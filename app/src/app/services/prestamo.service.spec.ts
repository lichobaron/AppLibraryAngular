import { TestBed, inject } from '@angular/core/testing';

import { PrestamoService } from './prestamo.service';

describe('PrestamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrestamoService]
    });
  });

  it('should be created', inject([PrestamoService], (service: PrestamoService) => {
    expect(service).toBeTruthy();
  }));
});
