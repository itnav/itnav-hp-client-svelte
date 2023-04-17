import { goto } from '$app/navigation';
import type { NavigationOptions } from './navigation';

/**
 * URL に検索条件（?~）を追加する。
 *
 * @param name    検索条件の名前
 * @param query   検索条件
 * @param options URL を変更する際のオプション
 */
export function addSearchParams(
	name: string,
	query: string,
	options: NavigationOptions,
) {
	const { pathname, search: currentSearch, searchParams, hash } = options.url;

	let search: string;

	// 何かしらの検索条件が存在した場合
	if (currentSearch) {
		// 現在の検索条件を取得
		const currentParam = searchParams.get(name);

		// 現在の検索条件と追加したい検索条件を連結
		searchParams.set(name, `${currentParam ? currentParam + ',' : ''}${query}`);

		search = `?${searchParams.toString()}`;

		// ↓ 何も検索されていなかった場合
	} else {
		search = `?${name}=${query}`;
	}

	return goto(`${pathname}${search}${hash}`, {
		noScroll: true,
		...options,
	});
}

/**
 * URL から特定の検索条件（?~）を削除する。
 *
 * @param name    検索条件の名前
 * @param query   検索条件
 * @param options URL を変更する際のオプション
 */
export function deleteSearchParams(
	name: string,
	query: string,
	options: NavigationOptions,
) {
	const { pathname, searchParams, hash } = options.url;

	const currentParam = searchParams.get(name);

	if (!currentParam) return;

	const newParam = currentParam
		.replace(query, '') // 指定された検索条件を削除する
		.replace(',,', ',') // 連続したカンマを削除する
		.replace(/^,|,$/g, ''); // 先頭と末尾のカンマを削除する

	// 新しい検索条件が存在しなくなった場合は検索条件を削除する
	newParam ? searchParams.set(name, newParam) : searchParams.delete(name);

	const search = searchParams.toString();

	return goto(`${pathname}${search ? `?${search}` : ''}${hash}`, {
		noScroll: true,
		...options,
	});
}
