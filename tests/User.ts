import { Primitives } from "../src";
import { Address } from "./Address";

export class User {
	constructor(readonly address: Address) {}

	toPrimitives(): Primitives<User> {
		return {
			address: this.address.toPrimitives(),
		};
	}
}
