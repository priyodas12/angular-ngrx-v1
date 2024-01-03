import { Component } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonsComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0;

  constructor(private store: Store<{ counterData: { countValue: number } }>) {
    console.log("# Const # CounterComponent >> " + store);
  }

  ngOnInit() {
    this.store.select('counterData').subscribe(data => {
      this.count = data.countValue;
    })
  }

  // onIncrement() {
  //   this.count++;
  //   console.log("CounterComponent.increment");
  // }

  // onDecrement() {
  //   this.count--;
  //   console.log("CounterComponent.decrement");
  // }

  // onReset() {
  //   this.count = 0;
  //   console.log("CounterComponent.reset");
  // }

}
