import { expectTypeOf } from "expect-type";

import { Primitives } from "../src";
import { Course } from "./Course";
import { DeliveryInfo } from "./DeliveryInfo";
import { Learner } from "./Learner";
import { Metadata } from "./Metadata";
import { Product } from "./Product";
import { Step } from "./Step";
import { User } from "./User";
import { Video } from "./Video";

describe("Primitives", () => {
	it("should ensure to only return primitive properties excluding methods", () => {
		type actualPrimitives = Primitives<Course>;

		type expectedPrimitives = {
			readonly courseId: string;
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should get primitive array type from value object array", () => {
		type actualPrimitives = Primitives<Learner>;

		type expectedPrimitives = {
			readonly enrolledCourses: string[];
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should generate nested primitive object", () => {
		type actualPrimitives = Primitives<User>;

		type expectedPrimitives = {
			readonly address: {
				readonly city: string;
				readonly street: string;
				readonly number: number;
			};
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should generate nested primitive type from array of value objects prop", () => {
		type actualPrimitives = Primitives<DeliveryInfo>;

		type expectedPrimitives = {
			readonly addresses: {
				readonly city: string;
				readonly street: string;
				readonly number: number;
			}[];
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should get primitive type in case it is not a value object", () => {
		type actualPrimitives = Primitives<Product>;

		type expectedPrimitives = {
			readonly active: boolean;
			readonly name: string;
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should get primitive number type from Date", () => {
		type actualPrimitives = Primitives<Step>;

		type expectedPrimitives = {
			readonly name: string;
			readonly publishedAt: number;
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should infer the optional properties", () => {
		type actualPrimitives = Primitives<Video>;

		type expectedPrimitives = {
			readonly id: string;
			readonly name: string | undefined;
			readonly duration: number | undefined;
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});

	it("should infer properties with unknown type", () => {
		type actualPrimitives = Primitives<Metadata>;

		type expectedPrimitives = {
			readonly data: Record<string, unknown>;
		};

		expectTypeOf<actualPrimitives>().toEqualTypeOf<expectedPrimitives>();
	});
});
