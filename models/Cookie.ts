export class Cookie {
  //TODO - Cookies have three attributes; name, colour, chocolateChipNum
  // colour is a string
  // There is one constructor which takes a name as a parameter.  Initialise colour to brown and chocolateChipNum to 0
  name: string;
  colour;
  chocolateChipNum;
  constructor(_paramName)
  {
    this.name = _paramName;
    this.colour = "brown"
    this.chocolateChipNum = 0
  }
}