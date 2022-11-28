import { TestBed } from '@angular/core/testing';

import { WelcomeKitService } from './welcome-kit.service';

describe('WelcomeKitService', () => {
  let service: WelcomeKitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeKitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
