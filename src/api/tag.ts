import {
	microCMSFetchById,
	microCMSFetchMany,
	microCMSFetchOne,
	type MicroCMSEntity,
} from './micro-cms';
import type { MicroCMSQuery } from './micro-cms-query';

export interface Tag extends MicroCMSEntity {
	key: string;
	name: string;
}

export function fetchTags(query?: MicroCMSQuery<Tag>) {
	return microCMSFetchMany('/tags', query);
}

export function fetchTag(query?: MicroCMSQuery<Tag>) {
	return microCMSFetchOne('/tags', query);
}

export function fetchTagById(id: string, query?: MicroCMSQuery<Tag>) {
	return microCMSFetchById(`/tags`, id, query);
}
