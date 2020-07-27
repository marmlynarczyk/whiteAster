import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class MenuStateService {
menuOpen:BehaviorSubject<boolean>
  constructor() {
    this.menuOpen = new BehaviorSubject(false);
   }
  toggle(){
    this.menuOpen.next(!this.menuOpen.value)
  }
}
