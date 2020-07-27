import { Component, OnInit,Input } from '@angular/core';
import {Notification} from '../../../_shared/notification';
import {NotificationsService} from '../../../_services/notifications.service'
import {MenuStateService} from '../../../_services/menu-state.service'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  
})
export class NotificationComponent implements OnInit {
@Input() index:number;
@Input() notification:Notification;
iconSrc:string
actionsActive:boolean = false;
  constructor(private notifications:NotificationsService,private menuState:MenuStateService) {
    
   }

  ngOnInit(): void {
    this.iconSrc = `/assets/img/${this.notification.icon}-icon.png`  
  }
  handleActionClick(){
    if(this.menuState.menuOpen.value===false){
      this.notifications.openNotification(this.index)
    }
      

  }
  handleSeenClick(){
    this.notifications.seenToggle(this.index)  
  }
  handleLikeClick(){
    this.notifications.likeToggle(this.index)  
  }
  handleDeleteClick(){
    this.notifications.deleteNotification(this.index)  
  }

}
