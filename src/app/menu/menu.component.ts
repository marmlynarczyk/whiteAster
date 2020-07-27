import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuStateService} from '../_services/menu-state.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  menuOpen:boolean;
  subscription:Subscription
  constructor(private menuState: MenuStateService){
    this.subscription = menuState.menuOpen.subscribe(data=>this.menuOpen=data)
   }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
