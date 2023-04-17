import { writable, type Unsubscriber, type Writable } from 'svelte/store';
import { navigating } from '$app/stores';
import type { Navigation } from '@sveltejs/kit';

type WritableSearchParamsMap = {
	[name: string]: {
		query: string;
		queries: string[];
	} & {
		[query: string]: true;
	};
};

export type SearchParamsMap = Immutable<WritableSearchParamsMap>;

export type SearchParamsMapState = Writable<SearchParamsMap>;

export function setSearchParamsMapStore(
	{ set }: SearchParamsMapState,
	navigation: Navigation | null,
) {
	if (!navigation || !navigation.to) return;

	const { search, searchParams } = navigation.to.url;

	if (!search) set({});

	const newMap: WritableSearchParamsMap = {};

	for (const [name, query] of searchParams.entries()) {
		const queries = query.split(',');

		const mapContent = { query, queries } as WritableSearchParamsMap[string];

		queries.forEach((query) => (mapContent[query] = true));

		newMap[name] = mapContent;
	}

	set(newMap);
}

export interface SearchParamsMapStore {
	state: SearchParamsMapState;
	subscribe: Unsubscriber;
	subscribingCount: number;
	unsubscribe: Unsubscriber | null;
}
export const SearchParamsMapStore: Readonly<SearchParamsMapStore> = {
	state: writable({}),

	subscribe() {
		const prevCount = this.subscribingCount++;

		// 既に subscribe されている場合は、現在の unsubscriber を返す
		if (prevCount > 0) return this.unsubscribe;

		const unsubscriber = navigating.subscribe((navigating) =>
			setSearchParamsMapStore(this.state, navigating),
		);

		const unsubscribe = () => {
			const count = --this.subscribingCount;

			if (count === 0) {
				unsubscriber();
				this.unsubscribe = null;
			}
		};

		return (this.unsubscribe = unsubscribe);
	},

	subscribingCount: 0,

	unsubscribe: null,
} satisfies SearchParamsMapStore;
