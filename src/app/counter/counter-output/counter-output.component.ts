import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { CommonModule } from '@angular/common';
import { getCounterValue } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {

  //@Input()
  counterOp!: number;

  counterDataSubscription!: Subscription;

  counterData1$!: Observable<CounterState>;

  //counterStateLocal: CounterState ;

  //step-6: to view/as observer we have to attach store.
  //counterData: same as  StoreModule.forRoot({ <counterData>: counterReducer }) app.config.ts
  //{ countValue: number } same as initialState in counter.state.ts
  constructor(private store: Store<{ counterData: CounterState }>) {
    //console.log("# Const # CounterOutputComponent >> " + store);
  }


  //This hook is often used for initialization logic, such as fetching data from a server or setting up subscriptions.
  ngOnInit() {
    //select observable data from store on initialization, and assign to component local variable.
    // this.store.select('counterData').subscribe(data => {
    //   this.counterOp = data.countValue;
    // })

    // this.conterDataSubscription = this.store
    //   .select('counterData')
    //   .subscribe((data) => {
    //     this.counterOp = data.countValue;
    //   })

    // this.counterData1$ = this.store.select('counterData');

    // this.counterData1$.subscribe(data => {
    //   console.log("Subscribed :" + data.countValue);
    // })

    // this.counterData1$.subscribe(data => {
    //   this.countText = data.countText;
    //   console.log("Subscribed :" + data.countText);
    // })

    this.counterDataSubscription = this.store.select(getCounterValue).subscribe(
      countValue => {
        console.log("CountValue Observable called!");
        this.counterOp = countValue;
      }
    );

    //console.log("<< CounterOutputComponent >> ngOnInit:: " + this.counterOp);
  }

  ngOnChanges() {
    //console.log("<< CounterOutputComponent >> ngOnChanges:: " + this.counterOp);
  }

  ngAfterViewInit() {
    //console.log("<< CounterOutputComponent >> ngAfterViewInit:: " + this.counterOp);
  }

  ngAfterViewChecked() {
    //console.log("<< CounterOutputComponent >> ngAfterViewChecked:: " + this.counterOp);
  }

  DoCheck() {
    //console.log("<< CounterOutputComponent >> DoCheck:: " + this.counterOp);
  }

  ngOnDestroy() {
    console.log("<< ngOnDestroy >> ngOnDestroy:: " + this.counterOp);
    if (this.counterDataSubscription) {
      this.counterDataSubscription.unsubscribe();
    }
  }
}
