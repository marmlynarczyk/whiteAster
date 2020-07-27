import { Injectable } from '@angular/core';
import {MenuItem} from '../_shared/menu-item'
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
private dummyData:MenuItem[]
  
private readonly _menuItems:BehaviorSubject<MenuItem[]>
readonly menuItems$:Observable<MenuItem[]> 
  constructor()
  {
    this.dummyData = [
      new MenuItem('mail','Mail Inbox',['first email','second  email','third email','fourth  email','fifth email']),
      new MenuItem('friends','Friends',["Anna","Eva","Andrew","Ola","Jacob","Joe","Monica","Matthew","Rachel","Phoebe","Ross"]),
      new MenuItem('invites','Invites',['first invitation']),
      new MenuItem('bookmarks','Bookmarks',[],false,false),
      new MenuItem('settings','Account Settings',[],false,false)
    ];
    this._menuItems = new BehaviorSubject(this.dummyData)
    this.menuItems$ = this._menuItems.asObservable();
  }
  setActive(index:number){
    const newState = this._menuItems.value.map((data,i)=>{
      if(i===index){
        data.active = !data.active;
      }else{
        data.active = false;
      }
      return data
    })
    this._menuItems.next(newState)
  }
}
