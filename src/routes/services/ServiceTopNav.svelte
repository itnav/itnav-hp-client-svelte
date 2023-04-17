<svelte:options immutable={true} />

<script lang="ts">
	import { page } from '$app/stores';
	import { gotoIdAnchor } from '@/utils/navigation';
	import type { ServicesPageSectionIdMap } from './+page.d';

	export let idMap: ServicesPageSectionIdMap;

	const gotoHeadingLink = (id: string) => {
		gotoIdAnchor(id, { url: $page.url });
	};
</script>

<nav class="nav">
	<button
		class="link"
		aria-label="教育事業へスクロールする"
		on:click={() => gotoHeadingLink(idMap.educationalProject)}
	>
		教育事業
	</button>

	<button
		class="link fade-1"
		aria-label="開発事業へスクロールする"
		on:click={() => gotoHeadingLink(idMap.developmentBusiness)}
	>
		開発事業
	</button>
</nav>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.nav {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: 1fr;
		gap: 16px;
		margin-bottom: 104px;
	}

	.link {
		box-sizing: border-box;
		padding: 16px;
		font-size: 16px;
		text-align: left;
		letter-spacing: 2.4px;
		border: 3px solid $black;
		opacity: 0;
		animation-name: fade-up-anime;
		animation-duration: 600ms;
		animation-fill-mode: both;
	}

	.fade-1 {
		animation-delay: 450ms;
	}

	@keyframes fade-up-anime {
		from {
			opacity: 0;
			transform: translateY(100px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@include pc {
		.nav {
			grid-template-rows: 1fr;
			grid-template-columns: repeat(2, 1fr);
			gap: 42px;
			margin-bottom: 160px;
		}

		.link {
			padding: 32px 0;
			font-size: 24px;
			line-height: 1.4;
			text-align: center;
			border: 6px solid $black;
		}
	}
</style>
