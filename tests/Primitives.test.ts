import { Course } from "./Course";
import { CourseId } from "./CourseId";

describe("Primitives", () => {
  it("should ensure to only return primitive properties excluding methods", () => {
    const course = new Course(new CourseId("course-id"));

    const actualPrimitives = course.toPrimitives();

    const expectedPrimitives = { courseId: "course-id" };

    expect(actualPrimitives).toEqual(expectedPrimitives);
  });
});
