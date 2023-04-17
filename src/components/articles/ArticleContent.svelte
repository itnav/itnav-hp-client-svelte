<script lang="ts">
	export let thumbnailSrc: string;
	export let title: string;
	export let content: string;
</script>

<article class="article">
	<img class="thumbnail" src={thumbnailSrc} alt={`${title} のサムネイル画像`} />

	<div class="body">
		<div class="content">
			<section class="text">
				{@html content}
			</section>

			{#if $$slots['content-end']}
				<section>
					<slot name="content-end" />
				</section>
			{/if}
		</div>

		<nav class="nav">
			<slot name="nav" />
		</nav>

		<aside class="aside">
			<slot name="aside" />
		</aside>
	</div>
</article>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.thumbnail {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		margin-bottom: 32px;
		border-top-left-radius: 24px;
		border-bottom-right-radius: 24px;
		object-fit: cover;
	}

	.content {
		margin-bottom: 80px;
	}

	.text :global {
		h1,
		h2 {
			margin-bottom: 24px;
		}

		h3,
		p {
			margin-bottom: 16px;
		}

		h4 {
			margin-bottom: 8px;
		}
	}

	.aside {
		box-sizing: border-box;
		padding: 42px;
		margin-bottom: 80px;
		border: 2px solid $black;
		border-radius: 12px;
	}

	@include pc {
		$content-top-margin: 72px;

		.thumbnail {
			grid-area: thumbnail;
			margin-bottom: $content-top-margin;
			margin-bottom: 72px;
			border-top-left-radius: 160px;
			border-bottom-right-radius: 0;
		}

		.body {
			position: relative;
			display: grid;
			grid-template-areas:
				'contents aside'
				'nav aside';
			grid-template-rows: 1fr auto;
			grid-template-columns: 1fr auto;
			gap: 104px 64px;
		}

		.aside {
			position: sticky;
			top: $content-top-margin;
			grid-area: aside;
			align-self: start;
			padding: 32px 24px;
			margin-bottom: 0;
			border-right: none;
			border-left: none;
			border-radius: 0;
		}

		.nav {
			grid-area: nav;
		}
	}
</style>
