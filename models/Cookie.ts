export class Cookie {
  name: string;
  colour;
  chocolateChipNum;
  constructor(_paramName: string) {
    this.name = _paramName;
    this.colour = 'brown';
    this.chocolateChipNum = 0;
  }
}
