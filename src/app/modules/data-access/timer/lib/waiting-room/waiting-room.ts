import { InjectionToken, type WritableSignal } from '@angular/core';

export const TIMER_TOKEN = new InjectionToken<ProcessTimer>('TimerToken');

export interface ProcessTimer {
  processTimer(): WritableSignal<Timer>;
}

export interface CalculateHours {
  calculateHours(diff: number): number;
}
export interface CalculateMinutes {
  calculateMinutes(diff: number): number;
}
export interface CalculateSeconds {
  calculateSeconds(diff: number): number;
}
export interface CalculateRemainingDays {
  calculateRemainingDays(diff: number): number;
}

export type Timer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
