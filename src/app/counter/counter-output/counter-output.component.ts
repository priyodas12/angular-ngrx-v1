import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {

  //@Input()
  counterOp!: number;

  //step-6: to view/as observer we have to attach store.
  //counterData: same as  StoreModule.forRoot({ <counterData>: counterReducer }) app.config.ts
  //{ countValue: number } same as initialState in counter.state.ts
  constructor(private store: Store<{ counterData: { countValue: number } }>) {
    console.log("# Const # CounterOutputComponent >> " + store);
  }


  //This hook is often used for initialization logic, such as fetching data from a server or setting up subscriptions.
  ngOnInit() {
    //select observable data from store on initialization, and assign to component local variable.
    this.store.select('counterData').subscribe(data => {
      this.counterOp = data.countValue;
    })
    console.log("<< CounterOutputComponent >>.ngOnInit:: " + this.counterOp);
  }

  ngOnChanges() {
    console.log("<< CounterOutputComponent >>.ngOnChanges:: " + this.counterOp);
  }

  ngAfterViewInit() {
    console.log("<< CounterOutputComponent >>v.ngAfterViewInit:: " + this.counterOp);
  }

  ngAfterViewChecked() {
    console.log("<< CounterOutputComponent >>.ngAfterViewChecked:: " + this.counterOp);
  }

  DoCheck() {
    console.log("<< CounterOutputComponent >>.DoCheck:: " + this.counterOp);
  }
}
