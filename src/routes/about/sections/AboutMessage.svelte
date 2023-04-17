<svelte:options immutable={true} />

<script lang="ts">
	import { typing } from '@/directives/typing';
	import { visible } from '@/directives/visible';
	import CEOSvgPath from './images/furuyama-takayuki.png';
</script>

<section class="section">
	<div
		class="container app-section-padding-x app-limit-design-max-width "
		use:visible={{ threshold: 0.3 }}
	>
		<h2 class="h2">
			<span>M</span>
			<span>E</span>
			<span>S</span>
			<span>S</span>
			<span>A</span>
			<span>G</span>
			<span>E</span>
		</h2>
		<div
			class="content"
			use:visible={{ class: 'slide-content', threshold: 0.7 }}
		>
			<div class="app-img-black-slide">
				<img class="img" src={CEOSvgPath} loading="lazy" alt="古山 隆幸" />
			</div>

			<div class="sentence-area">
				<h3 class="h3">
					<span class="app-white-slide">きっかけを</span>
					<br />
					<span class="app-white-slide">次世代へつなぐ。</span>
				</h3>
				<p class="p" use:typing>
					これまでたくさんのきっかけをもらって、今の私たちがあります。若者たちと未来を創っていくため、今度は私たちが、きっかけを届けます。
					<br />
					<br />
					きっかけはあちこちに落ちています。
					<br />
					だからこそ重要なのは、画一的な学びに留まらないこと。
					<br />
					大人から若者へ、何気ないきっかけのみつけかたを伝えていくこと。
					<br />
					そして、きっかけとなるものを、さまざまな形で提供することだと考えます。
					<br />
					きっかけという種を得た若者は、それぞれの花を咲かせ始めるでしょう。
					<br />
					<br />
					イトナブはこれからも、一人でも多くの若者にプログラミングという種を届け、種を育てる若者たちの成長を、全力で支援します。
				</p>
			</div>
		</div>

		<div class="ceo app-section-padding-x">
			<span>代表取締役CEO</span>
			<h4 class="ceo-name">古山 隆幸</h4>
		</div>
	</div>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		padding-top: 104px;
		padding-bottom: 120px;
		margin-bottom: 120px;
		color: $white;
		background-color: $black;
	}

	.h2 {
		margin-bottom: 40px;
		font-size: rpx(clamp(24px, 48rpx, 80px), mp);
		text-transform: uppercase;
	}

	.h2 span {
		text-indent: -3px;
		letter-spacing: -3px;
		opacity: 0;
	}

	.visible .h2 span {
		display: inline-block;
		transform: translateY(100%);
		transform-origin: bottom;
		animation-name: fade-up;
		animation-timing-function: transition-timing-function(ease-out);
		animation-fill-mode: forwards;

		&:nth-child(1) {
			animation-duration: 540ms;
			animation-delay: 340ms;
		}
		&:nth-child(2) {
			animation-duration: 540ms;
			animation-delay: 420ms;
		}
		&:nth-child(3) {
			animation-duration: 540ms;
			animation-delay: 500ms;
		}
		&:nth-child(4) {
			animation-duration: 540ms;
			animation-delay: 580ms;
		}
		&:nth-child(5) {
			animation-duration: 540ms;
			animation-delay: 660ms;
		}
		&:nth-child(6) {
			animation-duration: 540ms;
			animation-delay: 740ms;
		}
		&:nth-child(7) {
			animation-duration: 540ms;
			animation-delay: 820ms;
		}
	}

	@keyframes fade-up {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		margin-bottom: 32px;
	}

	.app-img-black-slide .img {
		opacity: 0;
	}

	.slide-content .app-img-black-slide .img {
		width: 100%;
		max-width: design-width(min);
		height: 100%;
		margin-bottom: 48px;
		margin-left: auto;
		object-fit: contain;
		animation: fade-in-slide 600ms forwards;
	}

	.app-white-slide {
		opacity: 0;
	}

	.sentence-area .app-white-slide {
		opacity: 0;
	}

	.slide-content .sentence-area .app-white-slide {
		animation: fade-in-slide 1s forwards;
	}

	@keyframes fade-in-slide {
		0% {
			opacity: 0;
			transform-origin: left;
		}
		100% {
			opacity: 1;
		}
	}

	.h3 {
		margin-bottom: 32px;
		font-size: 32px;
	}

	.p {
		margin-bottom: 1.4em;
	}

	.ceo {
		padding-right: 0;
		font-weight: bold;
		text-align: right;
	}

	.ceo-name {
		font-size: 18px;
	}

	@include pc {
		.section {
			padding: 120px 0;
			margin-bottom: 160px;
		}

		.content {
			display: grid;
			grid-template-columns: minmax(0, 1fr) 1fr;
			gap: $section-padding-pc-left;
			align-items: center;
			margin-bottom: 48px;
			@include text-shadow(1px, $black);
		}

		.img {
			box-sizing: border-box;
			width: auto;
			min-width: 100%;
			margin: 0;
		}

		.h2 {
			margin-bottom: 64px;
			font-size: rpx(clamp(40px, 128rpx, 144px), pc);
		}

		.h3 {
			margin-bottom: 72px;
			font-size: 48px;
		}

		.p {
			bottom: 50px;
		}

		.ceo-name {
			font-size: 24px;
		}
	}
</style>
