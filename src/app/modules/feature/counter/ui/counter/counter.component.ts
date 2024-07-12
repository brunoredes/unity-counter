import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  public counter = signal(0);

  public increment() {
    this.counter.update((value) => value + 1);
  }
  public decrease() {
    if (this.counter() <= 0) {
      return;
    }
    this.counter.update((value) => value - 1);
  }
}
