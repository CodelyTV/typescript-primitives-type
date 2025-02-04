import { Primitives } from "../src";

export class Product {
	constructor(
		public readonly active: boolean,
		public readonly createdAt: Date,
	) {}

	toPrimitives(): Primitives<Product> {
		return {
			active: this.active,
			createdAt: this.createdAt,
		};
	}
}
