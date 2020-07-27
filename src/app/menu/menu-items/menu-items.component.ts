import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuItemsService} from '../../_services/menu-items.service'
import {MenuItem} from '../../_shared/menu-item'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit,OnDestroy {
  items:MenuItem[]
  subscription:Subscription
  constructor(public menuItems:MenuItemsService) {
    this.subscription = menuItems.menuItems$.subscribe(data=>this.items=data)
   }

  ngOnInit(): void {

  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
