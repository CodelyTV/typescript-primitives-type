/* eslint-disable @typescript-eslint/no-unsafe-function-type */
type Methods<T> = {
	[P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MethodsAndProperties<T> = { [key in keyof T]: T[key] };

type Properties<T> = Omit<MethodsAndProperties<T>, Methods<T>>;

type PrimitiveTypes = string | number | boolean | undefined | null;

type DateToNumber<T> = T extends Date ? number : T;

type ValueObjectValue<T> = T extends PrimitiveTypes
	? T
	: T extends Date
		? number
		: T extends { value: infer U }
			? DateToNumber<U>
			: T extends Array<{ value: infer U }>
				? DateToNumber<U>[]
				: T extends Array<infer U>
					? Array<ValueObjectValue<U>>
					: T extends { [K in keyof Properties<T>]: unknown }
						? {
								[K in keyof Properties<T>]: ValueObjectValue<Properties<T>[K]>;
							}
						: T extends unknown
							? DateToNumber<T>
							: never;

export type Primitives<T> = {
	[key in keyof Properties<T>]: ValueObjectValue<T[key]>;
};
