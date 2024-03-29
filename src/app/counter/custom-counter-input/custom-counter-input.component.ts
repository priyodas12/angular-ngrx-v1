import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customCounterTextAction, customDecrementAction, customIncrementAction } from '../state/counter.action';
import { getCounterText } from '../state/counter.selector';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent {

  customCounterValAdd!: number;
  customCounterValSub!: number;

  countText!: string;

  constructor(private store: Store<{ counterData: CounterState }>) {

  }

  ngOnInit() {
    this.store.select(getCounterText).subscribe(counterText => {
      console.log("CountText Observable called!");
      this.countText = counterText;
    })
  }

  //on click event data dispatching.
  onSubtruction(val: any) {
    this.customCounterValSub = val;
    this.store.dispatch(customDecrementAction({ customCounterData: this.customCounterValAdd }))
    //console.log(this.customCounterValSub);
  }

  onAddition() {
    this.store.dispatch(customIncrementAction({ customCounterData: this.customCounterValAdd }))
    //console.log(this.customCounterValAdd);
  }

  onCounterTextChange() {
    this.store.dispatch(customCounterTextAction({ customCounterText: 'Test 1' }))
  }

}
