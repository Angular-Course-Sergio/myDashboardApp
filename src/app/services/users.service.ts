import { Injectable, signal } from '@angular/core';
import { State } from '@interfaces/state.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #state = signal<State>({
    loading: true,
    users: [],
  });

  constructor() {
    console.log('Cargando data');
  }
}
