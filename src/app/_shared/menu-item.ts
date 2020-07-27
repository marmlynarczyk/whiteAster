export class MenuItem {
  constructor(
    public icon: string,
    public name: string,
    public items: string[],
    public active: boolean = false,
    public hasCounter: boolean = true
  ) {}
}
