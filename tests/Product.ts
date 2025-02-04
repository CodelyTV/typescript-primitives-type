import { Primitives } from "../src";

export class Product {
	constructor(
		public readonly active: boolean,
		public readonly name: string,
	) {}

	toPrimitives(): Primitives<Product> {
		return {
			active: this.active,
			name: this.name,
		};
	}
}
