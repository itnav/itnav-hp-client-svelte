import { formatQueryToString } from './api';
import type { MicroCMSQuery } from './micro-cms-query';

export interface MicroCMSEntity {
	id: string;
	publishedAt: string;
	revisedAt: string;
	updatedAt: string;
	createdAt: string;
}

export interface MicroCMSImageEntity {
	url: string;
	height: number;
	width: number;
}

/**
 * MicroCMS からデータを取得した際のレスポンスの型。
 *
 * @see https://document.microcms.io/content-api/get-list-contents#h0c0b84b0b7
 */
export interface MicroCMSResponse<T> {
	contents: T[];
	totalCount: number;
	offset: number;
	limit: number;
}

/**
 * @param endpoint エンドポイント
 * @param query    取得オプション
 */
export function microCMSRawFetch<T extends MicroCMSEntity>(
	endpoint: string,
	query?: MicroCMSQuery<T>,
) {
	const queryParams = query ? formatQueryToString(query) : '';

	return fetch(`${$env.MICROCMS_SERVICE_DOMAIN}${endpoint}${queryParams}`, {
		headers: {
			'X-MICROCMS-API-KEY': $env.MICROCMS_API_KEY,
		},
	});
}

/**
 * MicroCMS のデータを取得する。
 *
 * @param endpoint エンドポイント
 * @param query    取得オプション
 */
export function microCMSFetch<T extends MicroCMSEntity>(
	endpoint: string,
	query: MicroCMSQuery<T> = {},
): Promise<MicroCMSResponse<T>> {
	return microCMSRawFetch<T>(endpoint, query).then((res) => res.json());
}

/**
 * MicroCMS からデータを配列で取得する。
 *
 * @param endpoint エンドポイント
 * @param query    取得オプション
 */
export function microCMSFetchMany<T extends MicroCMSEntity>(
	endpoint: string,
	query: MicroCMSQuery<T> = {},
) {
	return microCMSRawFetch<T>(endpoint, query)
		.then((res) => res.json())
		.then(({ contents }: MicroCMSResponse<T>) => contents);
}

/**
 * MicroCMS のデータから１つ取得する。
 *
 * @param endpoint エンドポイント
 * @param query    取得オプション
 */
export function microCMSFetchOne<T extends MicroCMSEntity>(
	endpoint: string,
	query: MicroCMSQuery<T> = {},
): Promise<T> {
	// 取得制限の設定を上書きして１件だけ取得する
	query.limit = 1;

	return microCMSRawFetch<T>(endpoint, query)
		.then((res) => res.json())
		.then(({ contents }: MicroCMSResponse<T>) => contents[0]);
}

/**
 * MicroCMS のデータから１つ取得する。
 *
 * @param endpoint エンドポイント
 * @param query    取得オプション
 */
export function microCMSFetchById<T extends MicroCMSEntity>(
	endpoint: string,
	id: string,
	query: MicroCMSQuery<T> = {},
): Promise<T> {
	return microCMSRawFetch<T>(`${endpoint}/${id}`, query).then(
		(res) => res.json() as Promise<T>,
	);
}
