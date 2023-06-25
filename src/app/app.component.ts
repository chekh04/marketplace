import { Component, OnInit } from '@angular/core';
import { calculate } from './core/helpers/calculate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketplace';

  public value: number;
  public result: string | null;
  public isCalculating: boolean = false;
  private currentWorker!: Worker;

  constructor() {
    this.value = 0;
    this.result = null;
  }

  public modelChange(newValue: number): void {
    this.value = newValue;
    this.result = null;
    if (newValue <= 0) {
      this.terminateRunningWorker();
      return;
    }
    const start = performance.now();
    this.runCalculation();
    console.log(`Blocked UI for ${performance.now() - start} ms`);
  }
  private runCalculation(): void {
    if (typeof Worker !== undefined) {
      this.terminateRunningWorker();
      this.invokeNewWebWorker(this.value);
      return;
    } else {
      console.error('Web workers not supported! Calling on main thread...');
      this.result = calculate(this.value);
    }
  }
  private invokeNewWebWorker(value: number): void {
    this.currentWorker = new Worker(new URL('./app.worker', import.meta.url));
    this.isCalculating = true;
    this.currentWorker.onmessage = ({data}) => {
      this.isCalculating = false;
      this.result = data;
      
    }
    this.currentWorker.postMessage(value);
  }
  private terminateRunningWorker(): void {
    this.currentWorker?.terminate();
    this.isCalculating = false;
  }
}