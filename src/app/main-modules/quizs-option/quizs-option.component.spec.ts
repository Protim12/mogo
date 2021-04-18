import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizsOptionComponent } from './quizs-option.component';

describe('QuizsOptionComponent', () => {
  let component: QuizsOptionComponent;
  let fixture: ComponentFixture<QuizsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
