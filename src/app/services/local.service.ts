import { Injectable, signal } from '@angular/core';


export type AvailableLocal = 'es'|'en';


@Injectable({providedIn: 'root'})
export class LocalService {
  private currentLocal = signal<AvailableLocal> ('es')

  constructor() {
    this.currentLocal.set(localStorage.getItem('local') as AvailableLocal ?? 'es')
  }

  get getLocal() {
    return this.currentLocal();
  }

  ChangeLocal = (local: AvailableLocal) => {
    localStorage.setItem(
      'local', local
    )
    this.currentLocal.set(local);
    window.location.reload();
  }
}
