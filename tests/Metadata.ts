import { Primitives } from "../src";

export class Metadata {
	constructor(public readonly data: Record<string, unknown>) {}

	toPrimitives(): Primitives<Metadata> {
		return {
			data: this.data,
		};
	}
}
