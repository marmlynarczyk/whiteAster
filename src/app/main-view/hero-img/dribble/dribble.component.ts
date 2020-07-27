import { Component, OnInit, OnDestroy } from "@angular/core";
import { NotificationsService } from "../../../_services/notifications.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-dribble",
  templateUrl: "./dribble.component.html",
  styleUrls: ["./dribble.component.scss"],
})
export class DribbleComponent implements OnInit, OnDestroy {
  notificationsNum: number = 0;
  subscription: Subscription;
  constructor(private notifications: NotificationsService) {
    this.subscription = notifications.notifications$.subscribe(
      (data) => (this.notificationsNum = data.length)
    );
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
