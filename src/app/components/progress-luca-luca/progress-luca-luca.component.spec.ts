import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLucaLucaComponent } from './progress-luca-luca.component';

describe('ProgressLucaLucaComponent', () => {
  let component: ProgressLucaLucaComponent;
  let fixture: ComponentFixture<ProgressLucaLucaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressLucaLucaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLucaLucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
