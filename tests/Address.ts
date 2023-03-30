import { Primitives } from "../src";
import { City } from "./City";
import { Street } from "./Street";

export class Address {
  constructor(
    readonly street: Street,
    readonly city: City,
    readonly number: number
  ) {}

  toPrimitives(): Primitives<Address> {
    return {
      street: this.street.value,
      city: this.city.value,
      number: this.number,
    };
  }
}
