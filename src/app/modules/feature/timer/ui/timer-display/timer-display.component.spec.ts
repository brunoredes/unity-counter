import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDisplayComponent } from './timer-display.component';

describe('TimerDisplayComponent', () => {
  let component: TimerDisplayComponent;
  let fixture: ComponentFixture<TimerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerDisplayComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('timer', {
      days: 2,
      hours: 20,
      minutes: 16,
      seconds: 33,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
