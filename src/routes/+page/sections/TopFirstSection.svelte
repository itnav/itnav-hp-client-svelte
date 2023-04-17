<svelte:options immutable={true} />

<script lang="ts">
	import { onMount } from 'svelte';

	let sectionElement: Element;

	let centerLineElement: Element;

	let bottomLineElement: Element;

	let hasScrolled = false;

	function onTransitionEnd(
		animationTarget: Element,
		intoViewTarget: Element = animationTarget,
	) {
		animationTarget.classList.add('animate');

		if (!hasScrolled) {
			intoViewTarget.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
			});
		}
	}

	onMount(() => {
		if (scrollY !== 0) {
			hasScrolled = true;
			return;
		}

		const onScroll = () => {
			hasScrolled = true;
			removeScrollListener();
		};

		const removeScrollListener = () => {
			removeEventListener('scroll', onScroll);
		};

		addEventListener('scroll', onScroll);

		return removeScrollListener;
	});
</script>

<section class="section app-outer-padding-x" bind:this={sectionElement}>
	<h1 class="h1">
		<span class="animate line">
			<strong class="char char-1 strong strong-1">誰</strong><span
				class="char char-2">だ</span
			><span class="char char-3">っ</span><span class="char char-4">て</span
			><span
				class="char char-5"
				on:animationend={() => onTransitionEnd(centerLineElement)}>、</span
			>
		</span>
		<span class="line" bind:this={centerLineElement}>
			<strong class="strong strong-2"
				><span class="char char-6">ど</span><span class="char char-7">こ</span
				></strong
			><span class="char char-8">に</span><span class="char char-9">い</span
			><span class="char char-10">た</span><span class="char char-11">っ</span
			><span class="char char-12">て</span><span
				class="char char-13"
				on:animationend={() =>
					onTransitionEnd(bottomLineElement, sectionElement)}>、</span
			>
		</span>
		<span class="line" bind:this={bottomLineElement}>
			<strong class="strong strong-3"
				><span class="char char-14">世</span><span class="char char-15">界</span
				></strong
			>
			<span class="multiline">
				<strong class="char char-16 strong strong-3">一</strong>
				<span class="line-bottom"
					><span class="char char-17">に</span><span class="char char-18"
						>な</span
					><span class="char char-19">れ</span><span class="char char-20"
						>る</span
					><span class="char char-21">ん</span><span class="char char-22"
						>だ</span
					>
				</span>
			</span>
		</span>
	</h1>

	<div class="statement">
		<span class="statement-item">Statement</span>
	</div>
</section>

<style scoped lang="scss">
	@use 'sass:math';
	@use '../../../styles/scss' as *;

	.section {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: none;
		min-height: 100vh;
		min-height: 100svh;
		max-height: 100%;
		padding-top: 88px;
		padding-bottom: 32px;
		margin-bottom: 64px;
	}

	.h1 {
		display: inline-flex;
		flex-direction: column;
		font-size: rpx(min(64px, 32rpx), mp, vh);
		line-height: 1.2;
		white-space: nowrap;
		writing-mode: vertical-rl;
	}

	.char {
		opacity: 0;
	}

	:global(.animate) .char {
		font-weight: 900;
		transition-duration: 100ms;
		animation-name: visible;
		animation-duration: 100ms;
		animation-fill-mode: forwards;
		/* stylelint-disable scss/selector-no-union-class-name */
		&-1 {
			animation-delay: 600ms;
		}

		&-2 {
			animation-delay: 700ms;
		}

		&-3 {
			animation-delay: 800ms;
		}
		&-4 {
			animation-delay: 900ms;
		}

		&-5 {
			animation-duration: 300ms;
			animation-delay: 1000ms;
		}
		&-6 {
			animation-delay: 0;
		}
		&-7 {
			animation-delay: 100ms;
		}
		&-8 {
			animation-delay: 200ms;
		}
		&-9 {
			animation-delay: 300ms;
		}
		&-10 {
			animation-delay: 400ms;
		}
		&-11 {
			animation-delay: 500ms;
		}

		&-12 {
			animation-delay: 600ms;
		}
		&-13 {
			animation-duration: 300ms;
			animation-delay: 700ms;
		}
		&-14 {
			animation-delay: 0;
		}
		&-15 {
			animation-duration: 300ms;
			animation-delay: 100ms;
		}
		&-16 {
			animation-duration: 300ms;

			animation-delay: 200ms;
		}
		&-17 {
			animation-duration: 300ms;

			animation-delay: 300ms;
		}
		&-18 {
			animation-delay: 400ms;
		}
		&-19 {
			animation-delay: 500ms;
		}
		&-20 {
			animation-delay: 600ms;
		}

		&-21 {
			animation-delay: 800ms;
		}
		&-22 {
			animation-delay: 900ms;
		}
		/* stylelint-enable scss/selector-no-union-class-name */
	}

	@keyframes visible {
		0% {
			border-color: black;
			opacity: 0;
		}
		98% {
			border-color: black;
			opacity: 1;
		}
		100% {
			border-color: transparent;
			opacity: 1;
		}
	}

	.strong {
		font-size: rpx(min(114px, 48rpx), mp, vh);
		font-weight: bold;
	}
	.strong-1,
	.strong-2 {
		margin-bottom: 8px;
	}

	.statement {
		display: none;
	}

	@include pc {
		.section {
			position: relative;
			display: inline-flex;
			align-items: normal;
			justify-content: left;
			width: 100%;
			min-width: 100vw;
			max-width: 1440px;
			padding: 88px 64px 50px;
			margin: 0 auto;
			margin-bottom: 110px;
		}

		.h1 {
			justify-content: space-evenly;
			font-size: rpx(66px, pc);
			font-weight: 900;
			letter-spacing: 4px;
			writing-mode: horizontal-tb;
		}

		.char {
			border-right: 2px solid black;
		}

		.line:nth-of-type(n + 2) {
			margin-top: -40px;
		}

		.strong {
			margin: 0;
			font-size: rpx(180px, pc);
		}

		.strong-1 {
			margin-right: 8px;
		}

		.strong-3 {
			font-size: rpx(320px, pc);
		}
		.multiline {
			display: inline-flex;
			flex-direction: column;
		}

		.line-bottom {
			margin-top: -1.2em; // 親の line-height と合わせる
			line-height: 1.2;
		}

		.statement {
			display: block;
		}
		.statement-item {
			position: absolute;
			right: 0px;
			margin-right: 104px;
			font-size: 34px;
			font-weight: bold;
			color: $primary;
			text-align: center;
			writing-mode: vertical-rl;
			animation-name: fade-in-anime;
			animation-duration: 3s;
			animation-fill-mode: both;
			&::after {
				position: absolute;
				left: 44%;
				width: 2px;
				height: 90vh;
				margin-top: 16px;
				content: '';
				background: $primary;
				animation-name: extend-line-anime;
				animation-duration: 10s;
				animation-fill-mode: both;
			}
		}

		@keyframes fade-in-anime {
			0% {
				opacity: 0;
				transform: translateY(-100px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}

		@keyframes extend-line-anime {
			0% {
				transform: scaleY(0);
				transform-origin: top;
			}
			20% {
				transform: scaleY(0);
				transform-origin: top;
			}
			45% {
				transform: scaleY(1);
				transform-origin: top;
			}
			55% {
				transform: scaleY(1);
				transform-origin: bottom;
			}
			100% {
				transform: scaleY(1);
				transform-origin: bottom;
			}
		}
	}
</style>
