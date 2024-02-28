import { expectTypeOf } from "expect-type";

import { MutablePrimitives } from "../src";
import { Course } from "./Course";
import { DeliveryInfo } from "./DeliveryInfo";
import { Learner } from "./Learner";
import { Product } from "./Product";
import { User } from "./User";
import { Video } from "./Video";

describe("MutablePrimitives", () => {
  it("should ensure to only return primitive properties excluding methods", () => {
    type actualPrimitives = MutablePrimitives<Course>;

    type expectedPrimitives = {
      courseId: string;
    };

    expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
  });

  it("should get primitive array type from value object array", () => {
    type actualPrimitives = MutablePrimitives<Learner>;

    type expectedPrimitives = {
      enrolledCourses: string[];
    };

    expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
  });

  it("should generate nested primitive object", () => {
    type actualPrimitives = MutablePrimitives<User>;

    type expectedPrimitives = {
      address: {
        city: string;
        street: string;
        number: number;
      };
    };

    expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
  });

  it("should generate nested primitive type from array of value objects prop", () => {
    type actualPrimitives = MutablePrimitives<DeliveryInfo>;

    type expectedPrimitives = {
      addresses: {
        city: string;
        street: string;
        number: number;
      }[];
    };

    expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
  });

  it("should get primitive type in case it is not a value object", () => {
    type actualPrimitives = MutablePrimitives<Product>;

    type expectedPrimitives = {
      active: boolean;
      createdAt: Date;
    };

    expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
  });

  it("should infer the optional properties", () => {
    type actualPrimitives = MutablePrimitives<Video>;

    type expectedPrimitives = {
      id: string;
      name: string | undefined;
      duration: number | undefined;
    };

    expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
  });
});
