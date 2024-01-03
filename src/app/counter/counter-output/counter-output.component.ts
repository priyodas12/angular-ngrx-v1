import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {

  @Input()
  counterOp!: number;

  ngOnInit() {
    console.log("CounterOutputComponent.ngOnInit:: " + this.counterOp);
  }

  ngOnChanges() {
    console.log("CounterOutputComponent.ngOnChanges:: " + this.counterOp);
  }

  ngAfterViewInit() {
    console.log("CounterOutputComponent.ngAfterViewInit:: " + this.counterOp);
  }

  ngAfterViewChecked() {
    console.log("CounterOutputComponent.ngAfterViewChecked:: " + this.counterOp);
  }

  DoCheck() {
    console.log("CounterOutputComponent.DoCheck:: " + this.counterOp);
  }
}
