<script lang="ts">
	import ArticleContent from '@/components/articles/ArticleContent.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div
	class="app-page app-page-padding-y app-section-padding-x app-limit-design-max-width"
>
	<h1 class="h1">{data.blog.title}</h1>

	<div class="tags">
		{#each data.blog.tags as tag}
			<span class="tag app-primary-color"># {tag.name}</span>
		{/each}
	</div>

	<ArticleContent
		title={data.blog.title}
		content={data.blog.content}
		thumbnailSrc={data.blog.thumbnail.url}
	>
		<div class="content-end" slot="content-end">
			<button
				class="content-end-button app-rounded-button app-mono"
				aria-label="記事の先頭に戻る"
				on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			>
				NEWS&REPORT TOP
			</button>
		</div>

		<svelte:fragment slot="aside">
			<h3 class="aside-h3">教育事業</h3>
			<ul class="aside-links">
				<li class="aside-link">アマタースタディ</li>
				<li class="aside-link">ナブかつ</li>
				<li class="aside-link">ナブかつLAB</li>
				<li class="aside-link">ナブかつLAB Seeds</li>
				<li class="aside-link">若手人材育成事業</li>
				<li class="aside-link">石巻ハッカソン</li>
				<li class="aside-link">1DAYCAMP事業</li>
			</ul>
			<button class="aside-button app-rounded-button app-en">
				SERVICE TOP
			</button>
		</svelte:fragment>
	</ArticleContent>

	<div class="content">
		<aside class="" />
	</div>
</div>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.h1 {
		margin-bottom: 8px;
		font-size: rpx(min(26px, 26rpx), mp);
		font-weight: 500;
	}

	.tags {
		margin-bottom: 32px;
	}
	.tag {
		display: block;
		font-size: 16px;
		line-height: 2;
	}

	.content-end {
		margin-top: 24px;
	}
	.content-end-button {
		width: 100%;
		padding: 12px 0;
	}

	.aside-h3 {
		margin-bottom: 16px;
		font-size: 18px;
		font-weight: 500;
	}
	.aside-links {
		padding-left: 1.5em;
		margin: 0 0 24px 0;
	}
	.aside-link {
		margin-bottom: 12px;
	}
	.aside-button {
		width: 100%;
		padding: 8px 0;
	}

	@include pc {
		.h1 {
			margin-bottom: 12px;
			font-size: rpx(min(56px, 56rpx), pc);
		}

		.tags {
			margin-bottom: 72px;
		}

		.content-end {
			display: flex;
			justify-content: center;
			margin-top: 48px;
		}
		.content-end-button {
			width: auto;
			padding: 12px 72px;
		}

		.aside-h3 {
			font-weight: bold;
		}
		.aside-links {
			padding-left: 0;
			margin-bottom: 40px;
			font-size: 16px;
			list-style: none;
		}
	}
</style>
