import { Primitives } from "../src";
import { VideoId } from "./VideoId";
import { VideoName } from "./VideoName";

export class Video {
	public constructor(
		public readonly id: VideoId,
		public readonly name: VideoName | undefined,
		public readonly duration: number | undefined,
	) {}

	public toPrimitives(): Primitives<Video> {
		return {
			id: this.id.value,
			name: this.name?.value,
			duration: this.duration,
		};
	}
}
