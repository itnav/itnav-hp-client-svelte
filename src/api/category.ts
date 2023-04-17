import {
	microCMSFetchById,
	microCMSFetchMany,
	microCMSFetchOne,
} from './micro-cms';
import type { MicroCMSEntity } from './micro-cms';
import type { MicroCMSQuery } from './micro-cms-query';

export interface Category extends MicroCMSEntity {
	key: string;
	name: string;
}

export function fetchCategories(query?: MicroCMSQuery<Category>) {
	return microCMSFetchMany('/categories', query);
}

export function fetchCategory(query?: MicroCMSQuery<Category>) {
	return microCMSFetchOne('/categories', query);
}

export function fetchCategoryById(id: string, query?: MicroCMSQuery<Category>) {
	return microCMSFetchById(`/categories`, id, query);
}
