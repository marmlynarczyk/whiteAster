export class Notification {
  constructor(
    public icon: string,
    public time: Date,
    public author: string,
    public text: string,
    public seen: boolean = false,
    public liked: boolean = false,
    public open: boolean = false
  ) {}
}
