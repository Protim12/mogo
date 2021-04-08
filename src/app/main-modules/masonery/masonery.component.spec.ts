import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasoneryComponent } from './masonery.component';

describe('MasoneryComponent', () => {
  let component: MasoneryComponent;
  let fixture: ComponentFixture<MasoneryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasoneryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasoneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
