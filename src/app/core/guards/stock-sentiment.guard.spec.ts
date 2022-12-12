import { TestBed } from '@angular/core/testing';

import { StockSentimentGuard } from './stock-sentiment.guard';

describe('StockSentimentGuard', () => {
  let guard: StockSentimentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StockSentimentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
