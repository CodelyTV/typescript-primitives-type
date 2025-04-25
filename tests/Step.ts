import { Primitives } from "../src";
import { ISODateTime } from "../src/Primitives";

export class Step {
	constructor(
		public readonly name: string,
		public readonly publishedAt: Date,
	) {}

	toPrimitives(): Primitives<Step> {
		return {
			name: this.name,
			publishedAt: this.publishedAt.toISOString() as ISODateTime,
		};
	}
}
