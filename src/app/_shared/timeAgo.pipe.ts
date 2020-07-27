import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "timeAgo",
})
export class TimeAgoPipe implements PipeTransform {
  timeAgo: number;
  transform(date: any): string {
    this.timeAgo = (<any>new Date() - date) / 1000;
    if (this.timeAgo < 60) {
      return "1 minute ago";
    }
    if (this.timeAgo >= 60 && this.timeAgo < 3600) {
      return `${Math.floor(this.timeAgo / 60)} minutes ago`;
    }
    if (this.timeAgo >= 3600 && this.timeAgo < 86400) {
      return `${Math.floor(this.timeAgo / 3600)} hours ago`;
    }
    if (this.timeAgo >= 86400) {
      return `${Math.floor(this.timeAgo / 86400)} days ago`;
    }
  }
}
