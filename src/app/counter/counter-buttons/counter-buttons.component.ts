import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './counter-buttons.component.html',
  styleUrl: './counter-buttons.component.css'
})
export class CounterButtonsComponent {

  //step-4
  //push the store into action epi-center where the event will occur.
  //counterData: same as  StoreModule.forRoot({ <counterData>: counterReducer }) app.config.ts
  //{ countValue: number } same as initialState in counter.state.ts
  constructor(private store: Store<{ counterData: CounterState }>) {
    console.log("# Const # CounterButtonsComponent >> " + store);
  }


  // @Output() increment: EventEmitter<number> = new EventEmitter<number>();

  // @Output() decrement: EventEmitter<number> = new EventEmitter<number>();

  // @Output() reset: EventEmitter<number> = new EventEmitter<number>();

  onIncrement() {
    console.log("CounterButtonsComponent.increment");
    //this.increment.emit();
    //step-5
    //on click event will trigger action<increment> which will lead to reducer on(increment) event.
    const counterData = 0;
    this.store.dispatch(incrementAction({ counterData }))
  }

  onDecrement() {
    console.log("CounterButtonsComponent.decrement");
    //this.decrement.emit();
    const counterData = 0;
    this.store.dispatch(decrementAction({ counterData }))
  }

  onReset() {
    console.log("CounterButtonsComponent.reset");
    //this.reset.emit();
    const counterData = 0;
    this.store.dispatch(resetAction({ counterData }))
  }
}
