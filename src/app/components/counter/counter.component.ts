import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <button (click)="decrement()">-</button>
      <span data-testid="count">Current Count: {{ counter }}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
})
export class CounterComponent {
  @Input() counter = 0

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }
}
