import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { MenuComponent } from './menu/menu.component';
import { HeroImgComponent } from './main-view/hero-img/hero-img.component';

import { NotificationsComponent } from './main-view/notifications/notifications.component';
import { HamburgerComponent } from './main-view/hero-img/hamburger/hamburger.component';
import { DribbleComponent } from './main-view/hero-img/dribble/dribble.component';
import { NotificationComponent } from './main-view/notifications/notification/notification.component';
import { TimeAgoPipe } from './_shared/timeAgo.pipe';
import { ProfileComponent } from './menu/profile/profile.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { ItemComponent } from './menu/menu-items/item/item.component';
import { LogoutComponent } from './menu/logout/logout.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MenuComponent,
    HeroImgComponent,   
    NotificationsComponent,
    HamburgerComponent,
    DribbleComponent,
    NotificationComponent,
    TimeAgoPipe,
    ProfileComponent,
    MenuItemsComponent,
    ItemComponent,
    LogoutComponent,
    AppWrapperComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

