import { TestBed } from '@angular/core/testing';

import { UiBookstoryService } from './ui-bookstory.service';

describe('UiBookstoryService', () => {
  let service: UiBookstoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiBookstoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
