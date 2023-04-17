export const prerender = true;

import { fetchBlogs, fetchCategories, fetchTags } from '@/api';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const [blogs, categories, tags] = await Promise.all([
		fetchBlogs(),
		fetchCategories(),
		fetchTags(),
	]);

	return {
		blogs,
		categories,
		tags,
	};
}) satisfies PageServerLoad;
