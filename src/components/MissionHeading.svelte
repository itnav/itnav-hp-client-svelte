<svelte:options immutable={true} />

<script lang="ts">
	import { visible } from '@/directives/visible';
</script>

<h3 class="h3" use:visible={{ threshold: 0 }}>
	<div class="slide-fade-in">
		<div class="app-black-slide-scroll-animation">
			<strong class="strong app-en">IT</strong>で生きる、<br />
		</div>
		<div class="app-black-slide-scroll-animation">はじまりの場をつくる。</div>
	</div>
</h3>

<style scoped lang="scss">
	@use '../styles/scss' as *;

	.h3 {
		margin-bottom: 48px;
		font-size: 28px;
		font-weight: 500;
		line-height: 1.2;
		letter-spacing: 2px;
	}
	.app-black-slide-scroll-animation {
		width: 100%;
		opacity: 0;
	}

	.visible .slide-fade-in .app-black-slide-scroll-animation {
		animation: slide-animation 680ms ease forwards;
	}

	@keyframes slide-animation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.strong {
		font-size: 64px;
		font-weight: bold;
	}

	@include pc {
		.h3 {
			font-size: 60px;
		}

		.strong {
			font-size: 140px;
		}
	}
</style>
