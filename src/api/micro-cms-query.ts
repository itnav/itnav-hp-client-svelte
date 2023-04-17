import type { MicroCMSEntity } from './micro-cms';

/** @see https://document.microcms.io/content-api/get-list-contents#hbe150f4148 */
export interface MicroCMSQuery<T extends MicroCMSEntity> {
	/**
	 * 下書き状態のコンテンツを対象に含ませるかどうかを指定することができる。
	 *
	 * @default false
	 * @see https://document.microcms.io/content-api/get-list-contents#hab2c474417
	 */
	draftKey?: boolean;

	/**
	 * 取得するコンテンツの数を指定することができる。
	 *
	 * @default 10
	 * @see https://document.microcms.io/content-api/get-list-contents#h4cd61f9fa1
	 */
	limit?: number;

	/**
	 * 取得するコンテンツの開始位置を指定することができる。
	 *
	 * @example
	 *
	 * ```ts
	 * const test = 'aaaa';
	 * ```
	 *
	 * @default 0
	 * @see https://document.microcms.io/content-api/get-list-contents#h41838110ca
	 */
	offset?: number;

	/**
	 * 取得するコンテンツをソートすることができる。
	 *
	 * @see https://document.microcms.io/content-api/get-list-contents#hf1af2f632c
	 */
	orders?: string;

	/**
	 * 「テキストフィールド」「テキストエリア」「リッチエディタ」属性のカラムの値を全文検索することができる。
	 *
	 * orders クエリを指定していない場合、検索結果の該当度合いに応じてソートされる。
	 *
	 * @see https://document.microcms.io/content-api/get-list-contents#ha8abec0b2f
	 */
	q?: string;

	/**
	 * 取得するカラムを制限することができる。
	 *
	 * @see https://document.microcms.io/content-api/get-list-contents#h7462d83de4
	 */
	fields?: (keyof T)[] | string[];

	/**
	 * id をもとに検索することができる。
	 *
	 * @see https://document.microcms.io/content-api/get-list-contents#h6b992e0fe4
	 */
	ids?: string[];

	/**
	 * 検索条件を以下の形式で指定することができる。
	 *
	 * ```
	 * `カラム名[演算子]値`;
	 * ```
	 *
	 * - 演算子一覧
	 *
	 *   1. equals
	 *   2. not_equals
	 *   3. contains
	 *   4. not_contains
	 *   5. less_than
	 *   6. greater_than
	 *   7. exists
	 *   8. not_exists
	 *   9. begins_with
	 *
	 * @see https://document.microcms.io/content-api/get-list-contents#hdebbdc8e86
	 */
	filters?: string;

	/**
	 * 取得されるリレーションの深さを指定することができる。
	 *
	 * @see https://document.microcms.io/content-api/get-list-contents#h30fce9c966
	 */
	depth?: number;

	/**
	 * リッチエディタのレスポンス形式を指定することができる。\
	 * この設定でレスポンスの型が大幅に変わってしまうので、`html` で固定する。
	 *
	 * @deprecated
	 * @see https://document.microcms.io/content-api/get-list-contents#h30fce9c966
	 */
	richEditorFormat?: 'html' /** | 'object' */;
}

export type MicroCMSFilterOperators =
	| 'equals'
	| 'not_equals'
	| 'contains'
	| 'not_contains'
	| 'less_than'
	| 'greater_than'
	| 'exists'
	| 'not_exists'
	| 'begins_with';

export function formatMicroCMSQueryFilter(
	key: string,
	filterOperator: MicroCMSFilterOperators,
	value: string,
) {
	return `${key}[${filterOperator}]${value}`;
}

export interface FormatMicroCMSQueryFiltersOptions {
	shouldMerge?: boolean;
}
export function formatMicroCMSQueryFilters(
	key: string,
	filterOperator: MicroCMSFilterOperators,
	logicalOperator: 'and' | 'or',
	values: string[],
	{ shouldMerge }: FormatMicroCMSQueryFiltersOptions = {},
) {
	const valueLength = values.length;

	let query = formatMicroCMSQueryFilter(key, filterOperator, values[0]);

	for (let i = 1; i < valueLength; i++) {
		const filter = formatMicroCMSQueryFilter(key, filterOperator, values[0]);
		query += `[${logicalOperator}]${filter}`;
	}

	return shouldMerge ? `[${logicalOperator}]${query}` : query;
}
