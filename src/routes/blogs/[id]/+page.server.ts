export const prerender = true;

import { fetchBlogById } from '@/api';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const blog = await fetchBlogById(params.id);

	return {
		blog,
	};
}) satisfies PageServerLoad;
