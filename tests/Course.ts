import { Primitives } from "../src";
import { CourseId } from "./CourseId";
import { TeacherId } from "./TeacherId";

export class Course {
  constructor(
    readonly courseId: CourseId,
    readonly teacherId: TeacherId | null
  ) {}

  toPrimitives(): Primitives<Course> {
    return {
      courseId: this.courseId.value,
      teacherId: this.teacherId?.value ?? null,
    };
  }

  thisFunctionShouldNotBeIncludedInTheToPrimitives(): boolean {
    return true;
  }
}
