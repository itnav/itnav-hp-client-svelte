import type { goto } from '$app/navigation';
import type { SearchParamsMap } from '@/store/search-params';

export type GotoOptions = NonNullable<Parameters<typeof goto>[1]>;

export interface NavigationOptions extends GotoOptions {
	url: URL;
}

export interface NavigationWithMapOptions extends NavigationOptions {
	map: SearchParamsMap;
}
