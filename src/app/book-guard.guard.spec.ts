import { TestBed, async, inject } from '@angular/core/testing';

import { BookGuardGuard } from './book-guard.guard';

describe('BookGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookGuardGuard]
    });
  });

  it('should ...', inject([BookGuardGuard], (guard: BookGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
