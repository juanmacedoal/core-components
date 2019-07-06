import { TestBed, inject } from '@angular/core/testing';

import { CoreComponentsService } from './core-components.service';

describe('CoreComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreComponentsService]
    });
  });

  it('should be created', inject([CoreComponentsService], (service: CoreComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
