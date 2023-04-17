import { deleteFragment, setFragment } from '@/utils/navigation';

export const DRAWER_FRAGMENT = 'drawer' as const;

export function isOpenDrawer(fragment: string) {
	return fragment === `#${DRAWER_FRAGMENT}`;
}

export function toggleDrawer(url: URL) {
	isOpenDrawer(location.hash)
		? deleteFragment()
		: setFragment(DRAWER_FRAGMENT, { url });
}
