import { goto } from '$app/navigation';
import type { NavigationOptions } from './navigation.d';
import type {} from '$env/dynamic/private';

/**
 * URL にフラグメント（#~）をセットする。
 *
 * @param fragment フラグメント名
 * @param options  URL を変更する際のオプション
 */
export function setFragment(fragment: string, options: NavigationOptions) {
	const { pathname, search } = options.url;
	return goto(`${pathname}${search}#${fragment}`, options);
}

/**
 * URL からフラグメント（#~）を削除する。
 *
 * history API でブラウザ規定の「戻る」動作（ブラウザバック）を実行することで、フラグメントを削除している。
 */
export function deleteFragment() {
	history.back();
}

export interface GotoIdAnchorOptions extends NavigationOptions {
	/**
	 * smooth scroll するためのスタイルを適用するかどうか
	 *
	 * @default true
	 */
	smoothScroll?: boolean;
}

/**
 * 引数に指定した ID を持つ要素に対してページ内リンク（スクロール）する。
 *
 * URL にフラグメント（#~）をセットすることでページ内リンクを実現している。
 *
 * `setFragment()` との違いとしては、既にフラグメントが存在する場合は、ルートの履歴を上書き（replace）する。\
 * また、スクロール時のみスムーススクロールようスタイルを変更する（第２引数のオプションで無効化可能）。
 *
 * @param id      ページ内リンクの対象となる要素の ID
 * @param options URL を変更する際のオプション
 */
export async function gotoIdAnchor(id: string, options: GotoIdAnchorOptions) {
	const currentFragment = options.url.hash;

	// 既にフラグメントが存在する場合は、ルートの履歴を上書き（replace）する
	if (currentFragment) {
		options = {
			replaceState: true,
			...options,
		};
	}

	let headEl: HTMLHeadElement | undefined;

	// この機能がオプションによって無効化 もしくは スタイル変更が不可能である場合すぐに実行する
	// （スタイルが変更可能かどうかをチェックするタイミングで head 要素の参照を head ローカル変数に格納している）
	if (options.smoothScroll === false || !(headEl = document.head)) {
		return setFragment(id, options);
	}

	// スタイル要素を作成
	const styleEl = document.createElement('style');
	styleEl.textContent = /*css*/ `:root{scroll-behavior: smooth}`;

	// スタイル要素を head に追加
	headEl.appendChild(styleEl);

	// フラグメントをセット
	const navigationResults = await setFragment(id, options);

	// 正常にナビゲーションが完了したら、スタイル要素を削除する
	styleEl.remove();

	return navigationResults;
}
