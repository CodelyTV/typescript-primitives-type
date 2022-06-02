import { CourseId } from "./CourseId";

export class Course {
  constructor(readonly courseId: CourseId) {}

  thisFunctionShouldNotBeIncludedInTheToPrimitives(): boolean {
    return true;
  }
}
