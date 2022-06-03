import { Primitives } from "../src/Primitives";
import { CourseId } from "./CourseId";

export class Course {
  constructor(readonly courseId: CourseId) {}

  toPrimitives(): Primitives<Course> {
    return {
      courseId: this.courseId.value,
    };
  }

  thisFunctionShouldNotBeIncludedInTheToPrimitives(): boolean {
    return true;
  }
}
