import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NamesListComponent } from "../names-list/names-list.component";

@Component({
  selector: 'app-counter',
  imports: [NgIf, CounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;

  constructor() {
    //this.counter++;
    console.log('Creando el componente del contador.');
  }

  incrementBy(value : number = 1) : void {
    this.counter+=value;
  }
  
  username :string = 'Tadeo';
}
