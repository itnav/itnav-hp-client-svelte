/* @ref https://github.com/microsoft/TypeScript/issues/13923 */

declare type ImmutablePrimitive =
	| undefined
	| null
	| boolean
	| string
	| number
	| ((...args: any) => any);

declare type Immutable<T> = T extends ImmutablePrimitive
	? T
	: T extends Map<infer K, infer V>
	? ImmutableMap<K, V>
	: T extends Set<infer M>
	? ImmutableSet<M>
	: ImmutableObject<T>;

declare type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };
declare type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>;
declare type ImmutableSet<T> = ReadonlySet<Immutable<T>>;
