import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private messageSource = new BehaviorSubject<string>('');
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeSearchText(message: string) {
    this.messageSource.next(message);
  }
}
