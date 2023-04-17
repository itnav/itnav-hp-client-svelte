<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { page } from '$app/stores';
	import { fetchBlogById } from '@/api';
	import ArticleContent from '@/components/articles/ArticleContent.svelte';

	const service = useQuery(
		[fetchBlogById.name, $page.params.id],

		// TODO: サービステーブルは未実装であるため、blog データで対応暫定処理
		() => fetchBlogById($page.params.id),
	);
</script>

<div class="app-page app-page-padding-y">
	<section class="app-section-padding-x app-limit-design-max-width">
		<h2 class="app-h1 h2">SERVICE</h2>
	</section>

	{#if $service.isLoading}
		<!-- TODO: ローディング画面の実装 -->
	{:else if $service.data}
		<section class="app-section-padding-x app-limit-design-max-width">
			<h1 class="h1">{$service.data.title}</h1>

			<div class="tags">
				{#each $service.data.tags as tag}
					<span class="app-tooltip">{tag.name}</span>
				{/each}
			</div>

			<ArticleContent
				title={$service.data.title}
				content={$service.data.content}
				thumbnailSrc={$service.data.thumbnail.url}
			>
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
					<button
						class="aside-button app-rounded-button app-en"
						on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						aria-label="画面最上部へスクロール"
					>
						SERVICE TOP
					</button>
				</svelte:fragment>
			</ArticleContent>

			<div class="content">
				<aside class="" />
			</div>
		</section>
	{/if}
</div>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	// h2 の方が先にきている
	.h2 {
		margin-bottom: 16px;
	}

	.h1 {
		margin-bottom: 8px;
		font-size: rpx(min(26px, 26rpx), mp);
		font-weight: 500;
	}

	.tags {
		margin-bottom: 32px;
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
