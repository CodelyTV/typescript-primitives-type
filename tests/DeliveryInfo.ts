import { Primitives } from "../src/Primitives";
import { Address } from "./Address";

export class DeliveryInfo {
  constructor(readonly addresses: Address[]) {}

  toPrimitives(): Primitives<DeliveryInfo> {
    return {
      addresses: this.addresses.map((address) => address.toPrimitives()),
    };
  }
}
