<svelte:options immutable={true} />

<script lang="ts">
	import type { Tag } from '@/api';
	import { timestampToYYYYMMDD } from '@/utils/date';

	export let href: string;
	export let ariaLabel: string;
	export let title: string;
	export let titleTag: 'h2' | 'h3' = 'h2';
	export let eventAt: string;
	export let thumbnail: string;
	export let category: string;
	export let tags: Tag[];
</script>

<a class="card" {href} aria-label={ariaLabel} on:click>
	<div class="thumbnail-flame">
		<img class="thumbnail" src={thumbnail} alt={`${title}のサムネイル画像`} />
	</div>
	<div class="content">
		<div class="top">
			<span class="category app-tooltip">{category}</span>
			<span class="event-at">{timestampToYYYYMMDD(eventAt)}</span>
		</div>
		<svelte:element this={titleTag} class="title">{title}</svelte:element>
		<div class="tags">
			{#each tags as tag}
				<span class="tag"># {tag.name}</span>
			{/each}
		</div>
	</div>
</a>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.card {
		display: grid;
		grid-template-rows: 2fr 1fr;
	}

	.thumbnail-flame {
		position: relative;
		margin-bottom: 8px;
	}
	.thumbnail {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		box-sizing: border-box;
		padding: 0 4px;
	}

	.top {
		margin-bottom: 8px;
	}

	.title {
		display: -webkit-box;
		margin-bottom: 4px;
		overflow: hidden;
		font-size: 22px;
		font-weight: bold;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.category {
		font-size: 12px;
	}

	.event-at,
	.tags {
		font-size: 12px;
		vertical-align: middle;
	}

	.tags {
		color: $black-grey;
	}
	.tag {
		margin-right: 8px;
	}

	@include pc {
		.event-at,
		.tags {
			font-size: 14px;
			vertical-align: middle;
		}
	}
</style>
