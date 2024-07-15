import { Injectable, signal, WritableSignal } from '@angular/core';
import {
  CalculateHours,
  CalculateMinutes,
  CalculateRemainingDays,
  CalculateSeconds,
  ProcessTimer,
  Timer,
} from './waiting-room';

@Injectable({
  providedIn: 'root',
})
export class WaitingRoomService
  implements
    ProcessTimer,
    CalculateRemainingDays,
    CalculateHours,
    CalculateMinutes,
    CalculateSeconds
{
  readonly #ONE_SECOND_IN_MILLISSECONDS = 1000;
  readonly #ONE_MINUTE_IN_SECONDS = 60;
  readonly #ONE_HOUR_IN_MINUTES = 60;
  readonly #HOURS_IN_ONE_DAY = 24;
  readonly #eventDate = 'July 30, 2024 06:00:00';

  processTimer(): WritableSignal<Timer> {
    const future = Date.parse(this.#eventDate);
    const now = Date.now();
    const diff = future - now;

    const days = this.calculateRemainingDays(diff);
    const hours = this.calculateHours(diff) - days * this.#HOURS_IN_ONE_DAY;
    const minutes =
      this.calculateMinutes(diff) -
      this.calculateHours(diff) * this.#ONE_HOUR_IN_MINUTES;
    const seconds =
      this.calculateSeconds(diff) -
      this.calculateMinutes(diff) * this.#ONE_MINUTE_IN_SECONDS;

    return signal({ days, hours, minutes, seconds });
  }

  /**
   * Method that calculate hours
   * @param {number} diff represents a difference from a calc "Date set - current date"
   * @returns number
   */
  calculateHours(diff: number): number {
    return Math.floor(
      diff /
        (this.#ONE_SECOND_IN_MILLISSECONDS *
          this.#ONE_MINUTE_IN_SECONDS *
          this.#ONE_HOUR_IN_MINUTES)
    );
  }
  calculateMinutes(diff: number): number {
    return Math.floor(
      diff / (this.#ONE_SECOND_IN_MILLISSECONDS * this.#ONE_MINUTE_IN_SECONDS)
    );
  }
  calculateSeconds(diff: number): number {
    return Math.floor(diff / this.#ONE_SECOND_IN_MILLISSECONDS);
  }
  calculateRemainingDays(diff: number): number {
    return Math.floor(
      diff /
        (this.#ONE_SECOND_IN_MILLISSECONDS *
          this.#ONE_MINUTE_IN_SECONDS *
          this.#ONE_HOUR_IN_MINUTES *
          this.#HOURS_IN_ONE_DAY)
    );
  }
}
