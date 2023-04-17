<svelte:options immutable={true} />

<script lang="ts">
	import { typing } from '@/directives/typing';
	import { visible } from '@/directives/visible';
	import TopThreeElementsSvg from './svg/TopThreeElementsSvg.svelte';
</script>

<section class="section">
	<div
		class="container app-outer-padding-x app-limit-design-max-width"
		use:visible={{ class: 'slide-content', threshold: 0.6 }}
	>
		<div class="h2-content">
			<h2 class="h2 app-inner-padding-x">
				<strong class="h2-strong app-white-slide"
					>出会い・<wbr />学び・<wbr />表現</strong
				>
				<br />
				<span class="app-white-slide">を回し続ける</span>
				<br />
				<span class="app-white-slide">未来を作る３要素</span>
			</h2>
		</div>

		<div class="figure-flame">
			<TopThreeElementsSvg />
		</div>

		<div class="paragraph app-inner-padding-x">
			<p use:typing>
				若者が未来を作る要素に必要なことは、「出会い」「学び」「表現」だと考えます。
				<br />
				優秀な技術者や目標となる大人と出会うことで、若者たちは未来へ走り出すための目標設定をすることができます。
				<br />
				目標設定ができたら学びのフェーズ。目標を目指しながら、学び（プログラミング学習など）を深めていきます。
				<br />
				学んだことを、発表の場で表現することで、それを聞いた人々との新たな出会いがうまれ、また学びを深めることとなります。
			</p>
		</div>
	</div>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		box-sizing: border-box;
		padding-top: 104px;
		padding-bottom: 104px;
		margin-bottom: 40px;
		color: $white;
		background-color: $black;
	}

	.h2-content {
		margin-bottom: 40px;
	}

	.h2 {
		grid-area: h;
		height: fit-content;
		font-size: 24px;
		font-weight: 500;
	}

	.h2-content .h2 {
		opacity: 0;
	}
	.slide-content .h2-content .h2 {
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
	.h2-strong {
		font-size: 30px;
		font-weight: bold;
		word-break: keep-all;
		white-space: nowrap;
	}

	.figure-flame {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: design-width(min);
		margin: 0 auto 48px;
	}

	@include pc {
		.section {
			padding-top: 140px;
			padding-bottom: 140px;
			margin-bottom: 80px;
		}

		.container {
			display: grid;
			grid-template-areas:
				'h figure'
				'p figure';
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr minmax(0, 0.8fr);
			gap: 0 24px;
		}

		.h2 {
			grid-area: h;
			font-size: 32px;
		}
		.h2-strong {
			font-size: 54px;
		}

		.figure-flame {
			grid-area: figure;
			width: auto;
			max-width: 100%;
			height: 100%;
			margin-bottom: 0;
		}

		.paragraph {
			grid-area: p;
		}
	}
</style>
