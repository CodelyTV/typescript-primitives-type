/* eslint-disable @typescript-eslint/ban-types */
type Methods<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type MethodsAndProperties<T> = { [key in keyof T]: T[key] };

type Properties<T> = Omit<MethodsAndProperties<T>, Methods<T>>;

type PrimitiveTypes = string | number | boolean | Date | undefined | null;

type ValueObjectValue<T> = T extends PrimitiveTypes
  ? T
  : T extends { value: infer U }
  ? U
  : T extends Array<{ value: infer U }>
  ? U[]
  : T extends Array<infer U>
  ? Array<ValueObjectValue<U>>
  : T extends { [K in keyof Properties<T>]: infer U }
  ? { [K in keyof Properties<T>]: ValueObjectValue<U> }
  : never;

export type Primitives<T> = {
  [key in keyof Properties<T>]: ValueObjectValue<T[key]>;
};
