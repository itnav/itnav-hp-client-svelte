<svelte:options immutable={true} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { visible } from '@/directives/visible';

	let sectionElement: Element;

	let secondLineElement: Element;

	let thirdLineElement: Element;

	let lastLineElement: Element;

	function onTransitionEnd(animationTarget: Element) {
		animationTarget.classList.add('animate');
	}

	onMount(() => {
		if (scrollY !== 0) {
			return;
		}

		const onScroll = () => {
			removeScrollListener();
		};

		const removeScrollListener = () => {
			removeEventListener('scroll', onScroll);
		};

		addEventListener('scroll', onScroll);

		return removeScrollListener;
	});
</script>

<section
	class="section app-page-padding-y app-outer-padding-x app-limit-design-max-width"
	bind:this={sectionElement}
>
	<h2 class="h2" use:visible={{ threshold: 0.4 }}>
		<span class="animate line">
			<span class="char char-1">街</span><span class="char char-2">・</span
			><span class="char char-3">未</span><span class="char char-4">来</span
			><span
				class="char char-5"
				on:animationend={() => onTransitionEnd(secondLineElement)}>を</span
			><br /></span
		>
		<span class="line" bind:this={secondLineElement}>
			<span class="char char-6">進</span><span class="char char-7">化</span
			><span class="char char-8">さ</span><span class="char char-9">せ</span
			><span
				class="char char-10"
				on:animationend={() => onTransitionEnd(thirdLineElement)}>る</span
			><br /></span
		>
		<span class="line" bind:this={thirdLineElement}>
			<span class="char char-11">若</span><span class="char char-12">者</span
			><span class="char char-13">た</span><span class="char char-14">ち</span
			><span
				class="char char-15"
				on:animationend={() => onTransitionEnd(lastLineElement)}>に</span
			><br /></span
		>
		<span class="line" bind:this={lastLineElement}>
			<span class="char char-16">場</span><span class="char char-17">と</span
			><span class="char char-18">き</span><span class="char char-19">っ</span
			><span class="char char-20">か</span><span class="char char-21">け</span
			><span class="char char-22">を</span><span class="char char-23">！</span
			></span
		>
	</h2>
</section>

<style scoped lang="scss">
	@use 'sass:math';
	@use '../../../styles/scss' as *;

	.section {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow-x: hidden;
	}

	.h2 {
		font-size: rpx(min(72px, 56rpx), mp);
		line-height: 1.7;
		white-space: nowrap;
		writing-mode: vertical-rl;
	}

	.char {
		opacity: 0;
	}

	:global(.visible .animate) .char {
		font-weight: 900;
		transition-duration: 100ms;
		animation-name: visible;
		animation-duration: 100ms;
		animation-fill-mode: forwards;
		/* stylelint-disable scss/selector-no-union-class-name */
		&-1 {
			animation-delay: 300ms;
		}

		&-2 {
			animation-delay: 400ms;
		}

		&-3 {
			animation-delay: 500ms;
		}
		&-4 {
			animation-delay: 600ms;
		}

		&-5 {
			animation-duration: 300ms;
			animation-delay: 700ms;
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
			animation-duration: 300ms;
			animation-delay: 400ms;
		}
		&-11 {
			animation-delay: 500ms;
		}
		&-12 {
			animation-delay: 600ms;
		}
		&-13 {
			animation-delay: 700ms;
		}
		&-14 {
			animation-delay: 800ms;
		}
		&-15 {
			animation-duration: 300ms;
			animation-delay: 900ms;
		}
		&-16 {
			animation-delay: 0;
		}
		&-17 {
			animation-delay: 200ms;
		}
		&-18 {
			animation-delay: 300ms;
		}
		&-19 {
			animation-delay: 400ms;
		}
		&-20 {
			animation-delay: 500ms;
		}
		&-21 {
			animation-delay: 600ms;
		}
		&-22 {
			animation-delay: 700ms;
		}
		&-23 {
			animation-delay: 800ms;
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

	@include pc {
		.h2 {
			font-size: rpx(min(152px, 136rpx), pc);
			writing-mode: horizontal-tb;
		}
		.section {
			display: block;
			padding-top: 104px;
			padding-bottom: 104px;
		}

		.char {
			border-right: 2px solid black;
		}
	}
</style>
