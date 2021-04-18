import { TestBed } from '@angular/core/testing';

import { QuizMetrixService } from './quiz-metrix.service';

describe('QuizMetrixService', () => {
  let service: QuizMetrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizMetrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
