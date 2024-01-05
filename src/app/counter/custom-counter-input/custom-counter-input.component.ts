import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrementAction } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent {

  customCounterVal!: number;

  constructor(private store: Store<{ counterData: CounterState }>) {

  }

  addToValue1(val: any) {
    this.customCounterVal = val;
    console.log(this.customCounterVal);
  }

  addToValue2() {
    this.store.dispatch(customIncrementAction({ customCounterData: this.customCounterVal }))
    console.log(this.customCounterVal);
  }

}
