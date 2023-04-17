<svelte:options immutable={true} />

<script lang="ts">
	import { typing } from '@/directives/typing';
	import { visible } from '@/directives/visible';
	import ItnavVisionSvg from './svg/ItnavVisionSvg.svelte';
</script>

<section
	class="section app-section-padding-x app-limit-design-max-width"
	use:visible={{ threshold: 0.2 }}
>
	<div class="h2-slide-fade-in">
		<h2 class="app-h2 app-black-slide-scroll-animation">Vision</h2>
	</div>
	<h3 class="h3">
		<span class="h3-text">
			若者達がプログラミングと<wbr />出会うきっかけを作り、
		</span>
		<br />
		<span class="h3-text">未来への準備を提供し、</span>
		<br />
		<span class="h3-text">飛び立てる発射台を全世界に作る。</span>
	</h3>

	<div class="content">
		<ItnavVisionSvg class="img" />

		<p class="vision-text-area" use:typing>
			イトナブは、地方都市部で潜在的能力があるにも関わらずその能力を開花させられていない若者に、プログラミング教育を通じて
			<br />
			「自ら学び」、
			<br />
			「コミュニケーションをとる」能力を養い、
			<br />
			「挑戦する力」を身に付け、
			<br />
			地方都市からでも世界で活躍できる若者を育て、 未来の日本を活気づけることを狙っております。
			<br />
			<br />
			プログラミングに興味を持ってもらえる「きっかけ」から始まり、「探求」にてプログラミング技術を高め、「活躍」できるまでの発射台を全世界に作るために、地域自治体・大学・高校などと連携を行い、人材育成を実施しています。
		</p>
	</div>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;
	.section {
		margin-bottom: 80px;
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

	.h3 {
		margin-bottom: 32px;
		font-size: 16px;
		font-weight: bold;
		line-height: 1.8;
		word-break: keep-all;
		white-space: nowrap;
	}
	.visible .h3 .h3-text {
		position: relative;
		display: inline-block;
		padding: 0 4px;
		overflow: hidden;
		color: $white;
		vertical-align: middle;
		&::before {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			content: '';
			background-color: #222;
			animation-name: bg-fade-stop-anime;
			animation-duration: 680ms;
			animation-fill-mode: both;
		}
	}
	@keyframes bg-fade-stop-anime {
		0% {
			transform: scaleX(0);
			transform-origin: left;
		}
		100% {
			transform: scaleX(1);
			transform-origin: left;
		}
	}

	.content {
		position: relative;

		:global(.img) {
			display: block;
			width: 100%;
			max-width: design-width(min);
			margin: 0 auto 40px;
		}
	}

	@include pc {
		.section {
			margin-bottom: 160px;
		}

		.h3 {
			margin-bottom: 48px;
			font-size: 40px;
		}

		.content {
			display: flex;
			gap: 64px;
			align-items: center;
			justify-content: center;

			:global(.img) {
				margin: 0;
			}
		}
	}
</style>
