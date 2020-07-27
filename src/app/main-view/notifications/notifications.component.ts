import { Component, OnInit,  OnDestroy } from '@angular/core';
import {NotificationsService} from '../../_services/notifications.service'
import {Notification} from '../../_shared/notification'
import {
  trigger,  
  style,
  animate,
  transition  
} from '@angular/animations';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  animations:[trigger('myInsertRemoveTrigger', [    
    transition(':leave', [
      animate('150ms', style({ height: '0px' }))
    ])
  ])]
})
export class NotificationsComponent implements OnInit, OnDestroy {
 
  subscription:Subscription;
  notificationHeight:number;
  
  notificationArray:Notification[]
  constructor(public notifications:NotificationsService) {
    this.setHeight()
    this.subscription = notifications.notifications$.subscribe(data=>{
      if(data!==null){
        this.notificationArray = data;
      }
    })
   }

  ngOnInit(): void {
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  
  setHeight(){
    const notificationsHeight = window.innerHeight-window.innerWidth*4/5;    
    let itemsNumber = Math.floor(notificationsHeight/110);
    this.notificationHeight = Math.floor(notificationsHeight/itemsNumber)
  }
 

}
