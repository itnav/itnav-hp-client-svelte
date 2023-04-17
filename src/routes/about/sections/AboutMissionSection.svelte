<svelte:options immutable={true} />

<script lang="ts">
	import MissionHeading from '@/components/MissionHeading.svelte';
	import { visible } from '@/directives/visible';
</script>

<section
	class="section app-section-padding-x app-limit-design-max-width"
	use:visible={{ threshold: 0.3 }}
>
	<div class="h2-slide-fade-in">
		<h2 class="h2 app-h2 app-black-slide-scroll-animation">Mission</h2>
	</div>
	<MissionHeading />
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		margin-bottom: 48px;
	}

	.h2-slide-fade-in .app-h2 {
		opacity: 0;
	}

	.visible .h2-slide-fade-in .app-h2 {
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
	@include pc {
		.section {
			margin-bottom: 160px;
		}
	}
</style>
