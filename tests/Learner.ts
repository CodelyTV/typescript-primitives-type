import { Primitives } from "../src";
import { CourseId } from "./CourseId";

export class Learner {
	constructor(readonly enrolledCourses: CourseId[]) {}

	toPrimitives(): Primitives<Learner> {
		return {
			enrolledCourses: this.enrolledCourses.map((course) => course.value),
		};
	}
}
