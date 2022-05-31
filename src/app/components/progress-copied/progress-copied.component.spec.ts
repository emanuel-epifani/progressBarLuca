import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCopiedComponent } from './progress-copied.component';

describe('ProgressCopiedComponent', () => {
  let component: ProgressCopiedComponent;
  let fixture: ComponentFixture<ProgressCopiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressCopiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCopiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
