import { Component, OnInit, Input, ViewChild, ElementRef} from "@angular/core";

import { MenuItem } from "../../../_shared/menu-item";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]  
})
export class ItemComponent implements OnInit{
  @ViewChild('elementRef',{static:true}) elementRef:ElementRef;
  @Input() index: number;
  @Input() item: MenuItem;  
  iconOff:string;
  iconOn:string;
  active:boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.active = this.item.active
    this.iconOff = `/assets/img/${this.item.icon}-icon.png`
    this.iconOn = `/assets/img/${this.item.icon}On-icon.png`;    
  }
 
 setActive(){
   this.active = !this.active  
   if(this.item.items.length===0){
     return
   }
   if(this.active){     
    this.elementRef.nativeElement.style.maxHeight = this.elementRef.nativeElement.scrollHeight+'px'
   }else{
    this.elementRef.nativeElement.style.maxHeight = '0px'
   }     
 } 
}
