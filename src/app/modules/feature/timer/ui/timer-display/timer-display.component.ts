import { Component, input } from '@angular/core';
import { Timer } from '../../../../data-access/timer/lib/waiting-room/waiting-room';

@Component({
  selector: 'app-timer-display',
  standalone: true,
  imports: [],
  templateUrl: './timer-display.component.html',
  styleUrl: './timer-display.component.scss',
})
export class TimerDisplayComponent {
  public timer = input.required<Timer>({ alias: 'timer' });
  protected readonly eventDate = '2024-07-30';
}
