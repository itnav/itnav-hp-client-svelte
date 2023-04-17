<svelte:options immutable={true} />

<script lang="ts">
	import type {
		HTMLAnchorAttributes,
		HTMLButtonAttributes,
	} from 'svelte/elements';

	// props の定義
	export let tag: 'a' | 'button' = 'a';
	export let href: string | undefined = undefined;
	export let path: string | undefined = undefined;
	export let suffixIcon: 'internal-link' | 'external-link' | undefined =
		undefined;

	// props の型定義
	type BaseProps = {
		suffixIcon?: typeof suffixIcon;
	};

	// a タグ かつ href があるパターンの props
	type PropsPattern1 = HTMLAnchorAttributes &
		BaseProps & {
			tag?: 'a';
			href: typeof href;
			path?: typeof path;
		};

	// a タグ かつ path があるパターンの props
	type PropsPattern2 = HTMLAnchorAttributes &
		BaseProps & {
			tag?: 'a';
			href?: typeof href;
			path: typeof path;
		};

	// button タグ用の props
	type PropsPattern3 = HTMLButtonAttributes &
		BaseProps & {
			tag: 'button';
			path?: typeof href;
			href?: typeof path;
		};

	type $$Props = PropsPattern1 | PropsPattern2 | PropsPattern3;

	// a タグ用の属性
	$: anchorAttribute = (() => {
		return href
			? { href, target: '_blank', rel: 'noopener noreferrer' }
			: { href: path };
	})();
</script>

<svelte:element
	this={tag}
	class:outlined-button={true}
	{...anchorAttribute}
	{...$$restProps}
>
	<span><slot /></span>

	<!-- 内部リンクアイコン -->
	{#if suffixIcon === 'internal-link'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class="suffix-internal-link-icon suffix-icon"
		>
			<path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
		</svg>

		<!-- 外部リンクアイコン -->
	{:else if suffixIcon === 'external-link'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class="suffix-external-link-icon suffix-icon"
		>
			<path
				d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"
			/>
		</svg>
	{/if}
</svelte:element>

<style scoped lang="scss">
	@use '../../styles/scss' as *;
	.outlined-button {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 1.2px;
		border: 2px solid currentColor;
		transition: transition(background-color, very-fast, standard);
		transition: ease 0.2s;
	}
	.outlined-button::before {
		position: absolute;
		width: 100%;
		height: 100%;
		content: '';
		filter: invert(100%);
		mix-blend-mode: difference;
	}

	.outlined-button:hover::before {
		position: absolute;
		width: 100%;
		height: 100%;
		content: '';
		background-color: black;
		transform: scale(1, 1);
		transform-origin: left;
		animation-name: bg-left-to-right-anime;
		animation-duration: 0.6s;
		animation-fill-mode: both;
	}

	@keyframes bg-left-to-right-anime {
		0% {
			transform: scaleX(0);
			transform-origin: left;
		}
		50% {
			transform: scaleX(1);
			transform-origin: left;
		}
		50.001% {
			transform-origin: right;
		}
		100% {
			transform: scaleX(0);
			transform-origin: right;
		}
	}

	.outlined-button:hover span {
		position: relative;
		z-index: 5;
		animation: text 0.8s ease 0.2s forwards;
	}

	@keyframes text {
		0% {
			filter: invert(1);
		}
		100% {
			color: currentColor;
		}
	}

	.suffix-icon {
		position: relative;
		z-index: 5;
		margin-left: auto;
		fill: currentColor;
	}

	.outlined-button:hover .suffix-icon {
		color: currentColor;
		animation: icon 0.8s ease 0.2s forwards;
	}

	@keyframes icon {
		0% {
			filter: invert(1);
			transform: scale(1);
		}
		100% {
			fill: currentColor;
		}
	}
	.suffix-internal-link-icon {
		width: 20px;
		height: 20px;
	}

	.suffix-external-link-icon {
		width: 18px;
		height: 18px;
		margin-top: 2px;
	}

	@include pc {
		.outlined-button {
			font-size: 16px;
		}

		.suffix-icon {
			margin-left: 12px;
		}

		.suffix-internal-link-icon {
			width: 28px;
			height: 28px;
		}

		.suffix-external-link-icon {
			width: 26px;
			height: 26px;
			margin-top: 3px;
		}
	}
</style>
