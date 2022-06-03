import { Primitives } from "../src/Primitives";
import { City } from "./City";
import { Street } from "./Street";

export class Address {
  constructor(readonly street: Street, readonly city: City) {}

  toPrimitives(): Primitives<Address> {
    return {
      street: this.street.value,
      city: this.city.value,
    };
  }
}
