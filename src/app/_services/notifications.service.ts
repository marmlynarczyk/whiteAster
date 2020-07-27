import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Notification } from "../_shared/notification";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private notificationsDummy: Notification[];
  private readonly _notifications = new BehaviorSubject<Notification[] | null>(
    null
  );
  readonly notifications$ = this._notifications.asObservable();
  constructor() {
    this.notificationsDummy = [
      new Notification(
        "smartphone",
        new Date(),
        "Mike | Creative Mints",
        "Mechanical Grasshopper"
      ),
      new Notification(
        "weather",
        new Date(2020, 6, 25, 10, 1),
        "Dash",
        "Assistant App - Weather Module"
      ),
      new Notification(
        "download",
        new Date(2020, 6, 25, 10, 0),
        "Ghulam",
        "Upcoming web Agency"
      ),
      new Notification(
        "download",
        new Date(2020, 6, 25, 8, 40),
        "Bill S Kenney",
        "Bamboo Branding Wall Piece - not flat"
      ),
      new Notification(
        "smartphone",
        new Date(2020, 6, 25, 8, 10),
        "Mike | Creative Mints",
        "Mechanical Grasshopper"
      ),
      new Notification(
        "weather",
        new Date(2020, 6, 25, 7, 11),
        "Dash",
        "Assistant App - Weather Module"
      ),
      new Notification(
        "download",
        new Date(2020, 6, 24, 9, 10),
        "Ghulam",
        "Upcoming web Agency"
      ),
      new Notification(
        "download",
        new Date(2020, 5, 25, 9, 10),
        "Bill S Kenney",
        "Bamboo Branding Wall Piece - not flat"
      ),
    ];
    this._notifications.next(this.notificationsDummy);
  }

  toggleValue(key: string, id: number) {
    if (this._notifications.value !== null) {
      const tempData = [...this._notifications.value];
      tempData[id][key] = !tempData[id][key];
      this._notifications.next(tempData);
    }
  }
  likeToggle(id: number) {
    this.toggleValue("liked", id);
  }
  seenToggle(id: number) {
    this.toggleValue("seen", id);
  }
  deleteNotification(id) {
    if (this._notifications.value !== null) {
      const temp: Notification[] = this._notifications.value.filter(
        (data, index) => index !== id
      );
      this._notifications.next(temp);
    }
  }
  openNotification(index: number) {
    if (this._notifications.value !== null) {
      const tempData = this._notifications.value.map((data, i) => {
        if (i === index) {
          data.open = !data.open;
        } else {
          data.open = false;
        }
        return data;
      });
    }
  }
  closeAllNotifications(){
    this.openNotification(-1);
  }
}
