import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {


  @Output() increment: EventEmitter<number> = new EventEmitter<number>();

  @Output() decrement: EventEmitter<number> = new EventEmitter<number>();

  @Output() reset: EventEmitter<number> = new EventEmitter<number>();

  onIncrement() {
    console.log("CounterButtonsComponent.increment");
    this.increment.emit();
  }

  onDecrement() {
    console.log("CounterButtonsComponent.decrement");
    this.decrement.emit();
  }

  onReset() {
    console.log("CounterButtonsComponent.reset");
    this.reset.emit();
  }
}
