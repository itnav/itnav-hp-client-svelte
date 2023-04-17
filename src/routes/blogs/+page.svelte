<script lang="ts">
	import { onMount } from 'svelte';
	import type { Blog } from '@/api';
	import ArticleCard from '@/components/articles/ArticleCard.svelte';
	import { ROUTE } from '@/router';
	import { SearchParamsMapStore } from '@/store/search-params';
	import SearchNav from './components/SearchNav.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const searchParamsMap = SearchParamsMapStore.state;
	onMount(() => SearchParamsMapStore.subscribe());

	$: blogs = (() => {
		const blogs = data.blogs;

		const map = $searchParamsMap;
		if (!map) blogs;

		const categoryQueryMap = map['category'];
		const filterCategory: (blog: Blog) => boolean = categoryQueryMap
			? (blog) => categoryQueryMap[blog.category.key]
			: () => true;

		const tagsQueryMap = map['tags'];
		const filterTags: (blog: Blog) => boolean = tagsQueryMap
			? (blog) => blog.tags.some(({ key }) => tagsQueryMap[key])
			: () => true;

		return blogs.filter((blog) => filterCategory(blog) && filterTags(blog));
	})();
</script>

<svelte:head>
	<title>NEWS&REPORT | 株式会社イトナブ</title>
	<meta
		name="description"
		content="イトナブに関係するお知らせ、ブログを掲載しています。教育や開発など様々な分野のお知らせやブログを随時更新していきますので是非ご覧ください。"
	/>
</svelte:head>

<div
	class="app-page app-page-padding-y app-section-padding-x app-limit-design-max-width"
>
	<h1 class="app-h1 h2">
		<span class="app-h1">N</span>
		<span class="app-h1">E</span>
		<span class="app-h1">W</span>
		<span class="app-h1">S</span>
		<span class="app-sub-h1">&</span>
		<br />
		<div class="app-h1-group">
			<span class="app-h1">R</span>
			<span class="app-h1">E</span>
			<span class="app-h1">P</span>
			<span class="app-h1">O</span>
			<span class="app-h1">R</span>
			<span class="app-h1">T</span>
		</div>
	</h1>

	<SearchNav categories={data.categories} tags={data.tags} />

	<section>
		<div class="cards">
			{#each blogs as blog}
				<ArticleCard
					href={ROUTE.blog.path(blog.id)}
					ariaLabel={ROUTE.blog.path(blog.title)}
					title={blog.title}
					titleTag="h2"
					eventAt={blog.startedEventAt}
					thumbnail={blog.thumbnail.url}
					category={blog.category.name}
					tags={blog.tags}
				/>
			{/each}
		</div>
	</section>
</div>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	// h2 の方が先にきている
	.h2 {
		margin-bottom: 32px;
	}
	.app-h1 .app-sub-h1 {
		text-indent: 8px;
		letter-spacing: 8px;
	}

	.app-h1-group .app-h1 {
		text-indent: -8px;
		letter-spacing: -8px;
	}

	.app-h1 span {
		display: inline-block;
		text-indent: -8px;
		letter-spacing: -8px;
		opacity: 0;
		transform: translateY(100%);
		transform-origin: bottom;
		animation-name: fade-up;
		animation-timing-function: transition-timing-function(ease-out);
		animation-fill-mode: forwards;

		&:nth-child(1) {
			animation-duration: 540ms;
			animation-delay: 180ms;
		}
		&:nth-child(2) {
			animation-duration: 540ms;
			animation-delay: 260ms;
		}
		&:nth-child(3) {
			animation-duration: 540ms;
			animation-delay: 340ms;
		}
		&:nth-child(4) {
			animation-duration: 540ms;
			animation-delay: 420ms;
		}
		&:nth-child(5) {
			animation-duration: 540ms;
			animation-delay: 500ms;
		}
		&:nth-child(6) {
			animation-duration: 540ms;
			animation-delay: 580ms;
		}
	}

	@keyframes fade-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 64px;
		align-items: stretch;
		justify-content: center;
		justify-items: stretch;
		margin-bottom: 120px;
	}

	@include pc {
		.h2 {
			margin-bottom: 56px;
		}
	}
</style>
