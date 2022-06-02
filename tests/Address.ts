import { City } from "./City";
import { Street } from "./Street";

export class Address {
  constructor(readonly street: Street, readonly city: City) {}
}
