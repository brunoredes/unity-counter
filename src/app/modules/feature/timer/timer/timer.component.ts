import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  Inject,
  WritableSignal,
} from '@angular/core';
import { TimerDisplayComponent } from '../ui/timer-display/timer-display.component';
import {
  Timer,
  TIMER_TOKEN,
} from '../../../data-access/timer/lib/waiting-room/waiting-room';
import { WaitingRoomService } from '../../../data-access/timer/lib/waiting-room/waiting-room.service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [TimerDisplayComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: TIMER_TOKEN, useClass: WaitingRoomService }],
})
export class TimerComponent {
  private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  protected timer!: WritableSignal<Timer>;

  constructor(
    @Inject(TIMER_TOKEN) private readonly timerService: WaitingRoomService
  ) {
    this.timer = this.timerService.processTimer();
    effect(() => {
      setInterval(() => {
        this.cdr.detectChanges();
        this.timer = this.timerService.processTimer();
      }, 1000);
    });
  }
}
