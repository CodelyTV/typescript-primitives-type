import { CourseId } from "./CourseId";

export class Learner {
  constructor(readonly enrolledCourses: CourseId[]) {}
}
