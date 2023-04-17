<svelte:options immutable={true} />

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import OutlinedButton from '@/components/buttons/OutlinedButton.svelte';
	import { visible } from '@/directives/visible';
	import { ROUTE } from '@/router';
	import { isOpenDrawer } from './drawer';

	$: isOpen = isOpenDrawer($page.url.hash);

	const ROUTES = [
		ROUTE.top,
		ROUTE.about,
		ROUTE.services,
		ROUTE.member,
		ROUTE.blogs,
	] as const;

	/** a tag のページ遷移をキャンセルし、`goto()` を用いてページ遷移する関数 */
	function replacePage(path: string, event: Event) {
		event.preventDefault();
		goto(path, { replaceState: true });
	}
</script>

{#if isOpen}
	<aside class="drawer app-section-padding-x">
		<nav class="nav">
			<div class="buttons app-mono">
				<OutlinedButton
					tag="a"
					class="button"
					suffixIcon="external-link"
					href={ROUTE.recruit.href}
					aria-label={ROUTE.recruit.ariaLabel}
				>
					{ROUTE.recruit.name}
				</OutlinedButton>

				<OutlinedButton
					tag="a"
					class="button"
					suffixIcon="internal-link"
					path={ROUTE.contact.href}
					aria-label={ROUTE.contact.ariaLabel}
					on:click={(event) => replacePage(ROUTE.contact.href, event)}
					target="_blank"
					rel="noopener noreferrer"
				>
					{ROUTE.contact.name}
				</OutlinedButton>
			</div>

			<ul class="links app-mono" use:visible={{ threshold: 0 }}>
				{#each ROUTES as route}
					<li class="link-item">
						<a
							class="link"
							href={route.path}
							aria-label={route.ariaLabel}
							on:click={(event) => replacePage(route.path, event)}
						>
							{route.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a
			class="sub-link app-en"
			href={ROUTE.privacy.path}
			aria-label={ROUTE.privacy.ariaLabel}
		>
			Privacy Policy
		</a>
	</aside>
{/if}

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 8;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 100%;

		// TODO: Safari で若干レイアウトがおかしくなるため、100vh, 100svh, 100lvh を指定し、どれが最適かを判断する
		min-height: 100%;
		max-height: 100%;
		padding-top: 96px;
		padding-bottom: 56px;
		overflow-y: scroll;
		color: $white;
		background-color: $black;

		@include disable-scrollbar;
	}

	.nav {
		display: flex;
		flex-wrap: wrap-reverse;
		height: 100%;
		padding: 0;
		margin-bottom: 24px;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		margin-top: 24px;

		:global(.button) {
			padding: 24px 32px;
			margin-bottom: 16px;
		}
	}
	.links {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: space-between;
		padding: 0;
		margin: 0;
		margin-bottom: 16px;
		font-size: 32px;
		font-weight: bold;
		line-height: 1.6;
		text-decoration: none;
		text-overflow: ellipsis;
		text-transform: uppercase;
		letter-spacing: 2.4px;
		white-space: nowrap;
		list-style: none;
	}
	.links li {
		position: relative;
		display: block;
		width: fit-content;
		margin-bottom: 24px;
		overflow: hidden;
		// text-align: right;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: all 0.2s linear;
		&:hover {
			color: $primary;
		}
		&::after {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -200;
			width: 100%;
			height: 100%;
			content: '';
			animation: slide-white-color 1000ms transition-timing-function(ease-out)
				forwards;
		}
		&:nth-child(1)::after {
			animation-delay: 400ms;
		}
		&:nth-child(2)::after {
			animation-delay: 550ms;
		}
		&:nth-child(3)::after {
			animation-delay: 700ms;
		}
		&:nth-child(4)::after {
			animation-delay: 850ms;
		}
		&:nth-child(5)::after {
			animation-delay: 1000ms;
		}
	}

	.link-item .link {
		opacity: 0;
	}
	.visible .link-item .link {
		animation: slide-end-display 100ms ease 1300ms forwards;
	}

	@keyframes slide-end-display {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-white-color {
		0% {
			background-color: #fff;
			transform: scaleX(0);
			transform-origin: right;
		}
		50% {
			transform: scaleX(1);
			transform-origin: right;
		}
		50.001% {
			transform-origin: left;
		}
		100% {
			background-color: #fff;
			transform: scaleX(0);
			transform-origin: left;
		}
	}

	.sub-link {
		flex-shrink: 0;
		color: $white-grey;
		text-decoration: none;
	}

	@include pc {
		.drawer {
			padding-top: 104px;
			padding-bottom: 64px;
		}

		.nav {
			flex-grow: 1;
		}

		.buttons {
			align-items: flex-start;
			align-items: stretch;
			width: auto;
			margin-right: 24px;

			:global(.button) {
				padding: 40px 104px;
				font-size: 24px;
			}
		}

		.links {
			flex-direction: column;
			align-items: end;
			font-size: 72px;
		}
		.link {
			margin-bottom: 0;
		}
	}
</style>
