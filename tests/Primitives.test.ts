import { Course } from "./Course";
import { CourseId } from "./CourseId";
import { TeacherId } from "./TeacherId";

describe("Primitives", () => {
  it("should ensure to only return primitive properties excluding methods", () => {
    const course = new Course(
      new CourseId("course-id"),
      new TeacherId("teacher-id")
    );

    const actualPrimitives = course.toPrimitives();

    const expectedPrimitives = {
      courseId: "course-id",
      teacherId: "teacher-id",
    };

    expect(actualPrimitives).toEqual(expectedPrimitives);
  });

  it("should accept nullable properties", () => {
    const course = new Course(new CourseId("course-id"), null);

    const actualPrimitives = course.toPrimitives();

    const expectedPrimitives = {
      courseId: "course-id",
      teacherId: null,
    };

    expect(actualPrimitives).toEqual(expectedPrimitives);
  });
});
