/* eslint-disable @typescript-eslint/no-unsafe-function-type */
type Year = `${number}${number}${number}${number}`;
type Month = `${number}${number}`;
type Day = `${number}${number}`;
type Hour = `${number}${number}`;
type Minute = `${number}${number}`;
type Second = `${number}${number}`;
type Milliseconds = `${number}${number}${number}`;
type Timezone = "Z" | `${"+" | "-"}${number}${number}:${number}${number}`;

export type ISODateTime =
	`${Year}-${Month}-${Day}T${Hour}:${Minute}:${Second}.${Milliseconds}${Timezone}`;

type Methods<T> = {
	[P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MethodsAndProperties<T> = { [key in keyof T]: T[key] };

type Properties<T> = Omit<MethodsAndProperties<T>, Methods<T>>;

type PrimitiveTypes = string | number | boolean | undefined | null;

type DateToISODateTime<T> = T extends Date ? ISODateTime : T;

type ValueObjectValue<T> = T extends PrimitiveTypes
	? T
	: T extends Date
		? ISODateTime
		: T extends { value: infer U }
			? DateToISODateTime<U>
			: T extends Array<{ value: infer U }>
				? DateToISODateTime<U>[]
				: T extends Array<infer U>
					? Array<ValueObjectValue<U>>
					: T extends { [K in keyof Properties<T>]: unknown }
						? {
								[K in keyof Properties<T>]: ValueObjectValue<Properties<T>[K]>;
							}
						: T extends unknown
							? DateToISODateTime<T>
							: never;

export type Primitives<T> = {
	[key in keyof Properties<T>]: ValueObjectValue<T[key]>;
};
