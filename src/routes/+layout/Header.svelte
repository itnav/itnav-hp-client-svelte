<svelte:options immutable={true} />

<script lang="ts">
	import { page } from '$app/stores';
	import FacebookLogoSvg from '@/components/svg/FacebookLogoSvg.svelte';
	import TwitterLogoSvg from '@/components/svg/TwitterLogoSvg.svelte';
	import ItnavLogoSvgPath from '@/lib/svg/itnav-logo.svg';
	import { ROUTE } from '@/router';
	import { toggleDrawer } from './drawer';
</script>

<header class="header">
	<div class="view">
		<h2 class="h2">
			<a class="itnav-link" href={ROUTE.top.path}>
				<img class="itnav-logo" src={ItnavLogoSvgPath} alt="イトナブ" />
			</a>
		</h2>

		<div class="actions">
			<button
				on:click={() => toggleDrawer($page.url)}
				class="menu"
				aria-label="ドロワーメニューを開閉する"
			>
				<div class="line" />
				<div class="line" />
				<div class="line" />
			</button>
		</div>
	</div>

	<nav class="nav app-pc-only">
		<a
			class="link"
			href="https://www.facebook.com/itnavishinomaki"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Facebookを開く"
		>
			<FacebookLogoSvg class="facebook-icon link-icon" />
		</a>

		<a
			class="link"
			href="https://twitter.com/itnav_"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Twitterを開く"
		>
			<TwitterLogoSvg class="twitter-icon link-icon" />
		</a>
	</nav>
</header>

<style scoped lang="scss">
	@use 'sass:math';
	@use '../../styles/scss' as *;

	.header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 16;
		width: 100%;
		pointer-events: none;
		filter: invert(100%);
		mix-blend-mode: exclusion;
	}

	.view {
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: $outer-padding-mp-x;
	}

	.h2,
	.itnav-link {
		display: inline-flex;
	}
	.itnav-link {
		pointer-events: auto;
	}
	.itnav-logo {
		width: 100%;
		max-height: 32px;
		fill: $black;
	}

	.menu {
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		pointer-events: auto;
	}

	// pc のみ表示
	.nav {
		position: fixed;
		top: 0;
		right: 0;
		box-sizing: content-box;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		width: $outer-padding-pc-left;
		height: 100%;
		pointer-events: auto;
		border-left: 2px solid $black;
	}

	.line {
		width: 24px;
		height: 2px;
		margin: 2.4px 0;
		background-color: $black;
		transition: transition(background-color, very-fast, ease-out);

		.menu:hover & {
			background-color: $primary;
		}
	}

	.link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		margin-bottom: 32px;

		:global(.link-icon) {
			width: 24px;
			height: 24px;
			fill: $black;
			transition: transition(fill, fast, ease-out);
		}

		:global(.facebook-icon) {
			&:hover {
				fill: #3b5998;
			}
		}

		:global(.twitter-icon) {
			&:hover {
				fill: #1da1f2;
			}
		}
	}

	@include pc {
		.header {
			height: 100%;
			padding: 0;
		}

		.view {
			width: 100%;
			padding: 0;
		}

		.itnav-link {
			margin: 24px $outer-padding-pc-left;
			pointer-events: auto;
		}
		.itnav-logo {
			max-height: 40px;
		}

		.actions {
			display: flex;
			justify-content: center;
			width: $outer-padding-pc-left;
			opacity: 0;
			animation: fade-in 640ms forwards;
		}

		.nav {
			display: flex;
			opacity: 0;
			animation: fade-in 640ms forwards;
		}

		@keyframes fade-in {
			from {
				transform: translateX(100%);
			}
			to {
				opacity: 1;
				transform: translateX(0);
			}
		}
	}
</style>
