import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _lang: string;
  private _langSubject = new Subject<string>();

  get lang(): string {
    this.getFromLocalStorage();

    return this._lang;
  }

  set lang(lan: string) {
    this._lang = lan;
    this._langSubject.next(lan);
    this.saveToLocalStorage();
  }

  get lang$(): Observable<string> {
    return this._langSubject.asObservable();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('langApp', JSON.stringify(this._lang));
  }

  private getFromLocalStorage(): any {
    this._lang = JSON.parse(localStorage.getItem('langApp'));
  }

}
