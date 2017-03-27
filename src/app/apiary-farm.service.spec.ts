import { TestBed, inject } from '@angular/core/testing';

import { BeeFarmService } from './bee-farm.service';

describe('BeeFarmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeeFarmService]
    });
  });

  it('should ...', inject([BeeFarmService], (service: BeeFarmService) => {
    expect(service).toBeTruthy();
  }));
});
