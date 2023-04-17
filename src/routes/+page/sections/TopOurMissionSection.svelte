<svelte:options immutable={true} />

<script>
	import MissionHeading from '@/components/MissionHeading.svelte';
	import { typing } from '@/directives/typing';
	import { visible } from '@/directives/visible';
	import { ROUTE } from '@/router';
</script>

<section
	class="section app-section-padding-x app-limit-design-max-width"
	use:visible={{ threshold: 0.1 }}
>
	<div class="h2-fade-in">
		<h2 class="app-h2 app-black-slide-scroll-animation">Our Mission</h2>
	</div>

	<MissionHeading />

	<div class="content">
		<div class="paragraph">
			<p class="p" use:typing>
				イトナブは考えています。
				<br />
				ITで生きようと考える若者たちやITに興味ある若者たちが何かを始めようとした時に「場」と「きっかけ」があれば未来は拓かれるのではないかと。
				<br />
				今踏みしめいている大地の未来を育てるために、私達イトナブは若者たちが飛び立てる発射台を作りたい。
			</p>
		</div>

		<a
			class="link app-underlined-button"
			href={ROUTE.about.path}
			aria-label={ROUTE.about.ariaLabel}
		>
			About
			<span class="app-underlined-button-arrow" />
		</a>
	</div>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		margin-bottom: 72px;
	}

	.h2-fade-in .app-black-slide-scroll-animation {
		opacity: 0;
	}

	.visible .h2-fade-in .app-black-slide-scroll-animation {
		animation: slide-animation forwards;
	}

	@keyframes slide-animation {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.paragraph {
		flex-grow: 1;
		margin-bottom: 48px;
		line-height: 2;
	}

	.p {
		margin-bottom: 8px;
	}

	.link {
		margin-left: auto;
	}

	@include pc {
		.section {
			margin-bottom: 160px;
		}

		.content {
			flex-direction: row;
			align-items: flex-end;
		}

		.paragraph {
			max-width: 640px;
			margin-right: 24px;
			margin-bottom: 0;
			font-size: 24px;
			line-height: 2.4;
		}
	}
</style>
