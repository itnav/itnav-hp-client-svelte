<svelte:options immutable={true} />

<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { fetchBlogs } from '@/api/blog';
	import { ROUTE } from '@/router';
	import { timestampToYYYYMMDD } from '@/utils/date';
	import TopBlogListArrowSvg from './svg/TopBlogListArrowSvg.svelte';

	const blogs = useQuery(fetchBlogs.name, () =>
		fetchBlogs({ orders: '-createdAt', limit: 4 }),
	);
</script>

<section class="section app-outer-padding-x app-limit-design-max-width">
	<h2 class="h2 app-h2">NEWS&REPORT</h2>

	{#if $blogs.data}
		<div class="content">
			<table class="table">
				<tbody class="tbody">
					{#each $blogs.data as blog}
						<tr class="tr">
							<td class="event-at td">
								<span class="event-at-label app-mono">
									{timestampToYYYYMMDD(blog.startedEventAt)}
								</span>
							</td>

							<td class="category td">
								<div class="category-positioner">
									<span class="category-label">
										{blog.category.name}
									</span>
								</div>
							</td>

							<th class="title td">
								{blog.title}
							</th>

							<td class="arrow td">
								<div class="arrow-positioner">
									<TopBlogListArrowSvg />
								</div>
							</td>

							<td class="anchor">
								<a
									class="link"
									href={ROUTE.blog.path(blog.id)}
									aria-label={`${blog.title}の詳細ページへ`}
								>
									{blog.title}
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<a
				href={ROUTE.blogs.path}
				aria-label={ROUTE.blogs.ariaLabel}
				class="app-underlined-button"
			>
				View all
				<span class="app-underlined-button-arrow" />
			</a>
		</div>
	{/if}
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		margin-bottom: 120px;
	}

	.h2 {
		letter-spacing: 2.4px;
	}

	.content {
		text-align: right;
	}

	.table {
		width: 100%;
		margin-bottom: 40px;
		text-align: left;
		border-collapse: collapse;
	}
	.table,
	.tbody {
		display: block;
	}

	$border: 2px solid $black;
	.tr {
		position: relative;
		box-sizing: border-box;
		display: grid;
		grid-template-areas:
			'event-at category arrow'
			'title title arrow';
		grid-template-rows: auto auto;
		grid-template-columns: auto 1fr auto;
		gap: 16px;
		align-items: center;
		padding: 24px 16px;
		border-bottom: $border;
	}

	.event-at {
		grid-area: event-at;
		font-size: 14px;
	}
	.event-at-label {
		vertical-align: text-top;
	}

	.category {
		box-sizing: border-box;
		display: flex;
		grid-area: category;
		margin-right: auto;
		white-space: nowrap;
	}
	.category-positioner {
		display: flex;
		align-items: center;
		justify-content: stretch;
	}
	.category-label {
		width: 100%;
		padding: 2px 16px 4px;
		font-size: 12px;
		font-weight: bold;
		line-height: 1;
		color: $primary;
		vertical-align: text-bottom;
		border: $primary 2px solid;
		border-radius: 32px;
	}

	.title {
		grid-area: title;
		font-size: 16px;
		font-weight: bold;
	}

	.arrow {
		$size: 24px;

		grid-area: arrow;
		width: $size;
		min-width: $size;
		height: $size;
		min-height: $size;
		margin-left: $size;
	}
	.arrow-positioner {
		display: flex;
	}

	.anchor {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color: transparent;
	}
	.link {
		display: block;
		height: 100%;
	}

	@include pc {
		.section {
			margin-bottom: 160px;
		}

		.h2 {
			margin-bottom: 64px;
		}

		.table {
			display: table;
			width: 100%;
		}
		.tbody {
			display: table-row-group;
		}
		.tr {
			display: table-row;
			border-top: $border;
		}
		.td {
			display: table-cell;
			padding: 32px 16px;
			vertical-align: middle;
		}

		.event-at,
		.category {
			margin-right: 0;
			text-align: center;
			white-space: nowrap;
		}

		.title {
			width: 100%;
		}
	}
</style>
