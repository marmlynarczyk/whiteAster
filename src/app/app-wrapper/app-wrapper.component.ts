import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuStateService } from "../_services/menu-state.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-wrapper",
  templateUrl: "./app-wrapper.component.html",
  styleUrls: ["./app-wrapper.component.scss"],
})
export class AppWrapperComponent implements OnInit,OnDestroy {
  menuOpen: boolean;
  subscription: Subscription;
  constructor(public menuState: MenuStateService) {
    this.subscription = menuState.menuOpen.subscribe(
      (data) => (this.menuOpen = data)
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
