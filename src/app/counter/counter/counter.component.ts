import { Component } from '@angular/core';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterButtonsComponent } from '../counter-buttons/counter-buttons.component';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterOutputComponent, CounterButtonsComponent,HttpClientModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 0;
  //refering with interface instead of raw i.e object counterData format.
  constructor(private store: Store<{ counterData: CounterState }>) {
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
