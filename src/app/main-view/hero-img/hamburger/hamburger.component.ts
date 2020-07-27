import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuStateService } from "../../../_services/menu-state.service";
import { NotificationsService } from "../../../_services/notifications.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-hamburger",
  templateUrl: "./hamburger.component.html",
  styleUrls: ["./hamburger.component.scss"],
})
export class HamburgerComponent implements OnInit, OnDestroy {
  menuOpen: boolean;
  subscription: Subscription;
  constructor(
    private menuState: MenuStateService,
    private notifications: NotificationsService
  ) {
    this.subscription = this.menuState.menuOpen.subscribe((data) => {
      this.menuOpen = data;
    });
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  hamburgerClick() {
    this.menuState.toggle();
    this.notifications.closeAllNotifications();
  }
}
