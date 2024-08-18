import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ReqResponse } from '@interfaces/req-response.interface';
import { State } from '@interfaces/state.interface';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<ReqResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }
}
