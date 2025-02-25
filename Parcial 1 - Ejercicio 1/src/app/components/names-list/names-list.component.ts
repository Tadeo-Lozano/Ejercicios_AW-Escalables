import { NgFor } from '@angular/common';
import { Component, input } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-names-list',
  imports: [NgFor],
  templateUrl: './names-list.component.html',
  styleUrl: './names-list.component.css',
})
export class NamesListComponent {
  names: string[] = ['Juan', 'Pedro', 'Luis', 'Ana', 'Maria'];

  games = [
    { id: 1, name: 'Mario Bros', price: 30 },
    { id: 2, name: 'Zelda', price: 40 },
    { id: 3, name: 'Pokemon', price: 50 },
    { id: 4, name: 'Donkey Kong', price: 20 },
  ];

  
}
