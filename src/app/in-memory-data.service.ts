import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todoes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {todoes};
  }

  // Overrides the genId method to ensure that a todo always has an id.
  // If the todoes array is empty,
  // the method below returns the initial number (11).
  // if the todoes array is not empty, the method below returns the highest
  // todo id + 1.
  genId(todoes: Todo[]): number {
    return todoes.length > 0 ? Math.max(...todoes.map(todo => todo.id)) + 1 : 11;
  }
}
