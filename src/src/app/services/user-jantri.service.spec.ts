import { TestBed } from '@angular/core/testing';

import { UserJantriService } from './user-jantri.service';

describe('UserJantriService', () => {
  let service: UserJantriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserJantriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
