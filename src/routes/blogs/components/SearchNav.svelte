<svelte:options immutable={true} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { SearchParamsMapStore } from '@/store/search-params';
	import { addSearchParams, deleteSearchParams } from '@/utils/navigation';
	import type { PageServerData } from '../$types';

	const searchParamsMap = SearchParamsMapStore.state;
	onMount(() => SearchParamsMapStore.subscribe());

	export let categories: PageServerData['categories'];
	export let tags: PageServerData['tags'];

	function toggleQuery(isActive: boolean, name: string, query: string) {
		isActive
			? deleteSearchParams(name, query, { url: $page.url, replaceState: true })
			: addSearchParams(name, query, { url: $page.url, replaceState: true });
	}
</script>

<nav class="nav">
	<span class="category-title title app-en">Category.</span>
	<div class="categories">
		{#each categories as category}
			{@const key = category.key}
			{@const isActive = $searchParamsMap.category?.[key]}
			<button
				on:click={() => toggleQuery(isActive, 'category', key)}
				class="category app-tooltip"
				class:active={isActive}
				aria-label={`${category.name}を検索条件に含める`}
			>
				{category.name}
			</button>
		{/each}
	</div>

	<div class="divider" />

	<span class="tag-title title app-en">Tag.</span>
	<div class="tags">
		{#each tags as tag}
			{@const key = tag.key}
			{@const isActive = $searchParamsMap.tags?.[key]}
			<button
				class="tag"
				class:active={isActive}
				on:click={() => toggleQuery(isActive, 'tags', key)}
				aria-label={`${tag.name}を検索条件に含める`}
			>
				# {tag.name}
			</button>
		{/each}
	</div>
</nav>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.nav {
		box-sizing: border-box;
		padding: 24px;
		margin-bottom: 72px;
		border: 3px solid black;
		border-radius: 8px;
	}

	.category {
		margin-bottom: 8px;
	}

	.title {
		display: block;
		margin-bottom: 16px;
		font-size: 18px;
		font-weight: 500;
	}

	.divider {
		height: 2px;
		margin: 24px 0;
		background-color: $black-grey;
	}

	.tag {
		margin-right: 24px;
		line-height: 2;
	}

	.active {
		color: $primary;
		border-color: $primary;
	}

	@include pc {
		.nav {
			display: grid;
			grid-template-areas:
				'category-title categories'
				'divider divider'
				'tag-title tags';
			grid-template-rows: auto auto auto;
			grid-template-columns: auto 1fr;
			padding: 48px 48px 32px 48px;
			margin-bottom: 52px;
		}

		.title {
			margin-right: 24px;
		}
		.divider {
			grid-area: divider;
			margin: 32px 0;
		}

		.categories {
			grid-area: categories;
		}
		.category {
			margin-right: 32px;
			margin-bottom: 0;
		}
		.category-title {
			grid-area: category-title;
		}

		.tag-title {
			grid-area: tag-title;
		}
		.tags {
			grid-area: tags;
		}
		.tag {
			margin-right: 32px;
			font-size: 15px;
			letter-spacing: 2px;
		}
	}
</style>
