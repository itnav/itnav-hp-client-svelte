<svelte:options immutable={true} />

<script lang="ts">
	import OutlinedButton from '@/components/buttons/OutlinedButton.svelte';
	import { ROUTE } from '@/router';
	import TopMessageCodeHeading from './svg/TopMessageCodeHeadingSvg.svelte';
</script>

<section class="section app-section-padding-x app-limit-design-max-width">
	<div class="container">
		<div class="top">
			<!-- NOTE: PC のみ表示 -->
			<div class="message-code-flame app-pc-only">
				<TopMessageCodeHeading class="message-code" />
			</div>

			<div class="heading">
				<h2 class="h2 app-en">We're hiring!</h2>
				<p class="p">
					イトナブでは、
					<wbr />
					ともに働く仲間を募集しています。
				</p>
			</div>
		</div>

		<div class="buttons">
			<OutlinedButton
				class="button"
				suffixIcon="external-link"
				href={ROUTE.recruitInfo.href}
				aria-label={ROUTE.recruitInfo.ariaLabel}
			>
				中途採用
			</OutlinedButton>

			<!-- TODO: インターンシップの詳細ページを作成する必要があるかも -->
			<OutlinedButton
				class="button"
				suffixIcon="internal-link"
				href={'#'}
				aria-label={''}
			>
				インターンシップ
			</OutlinedButton>
		</div>
	</div>
</section>

<style scoped lang="scss">
	@use 'sass:math';
	@use '../../../styles/scss' as *;

	.section {
		box-sizing: border-box;
		padding-top: 40px;
		padding-bottom: 40px;
		color: $white;
		background-color: $black;
	}

	.top {
		margin-bottom: 24px;
	}

	.h2 {
		font-size: rpx(clamp(24px, 42rpx, 64px), mp);
		line-height: 1.2;
		white-space: nowrap;
	}

	.p {
		word-break: keep-all;
		white-space: normal;
	}

	.buttons {
		:global(.button) {
			box-sizing: border-box;
			width: 100%;
			padding: 12px 16px;
			margin-bottom: 8px;
		}
	}

	@include pc {
		.section {
			background-color: inherit;
		}

		.container {
			padding: 72px 64px;
			background-color: $black;
			border-top-right-radius: 48px;
			border-bottom-left-radius: 48px;
		}

		.top {
			display: grid;
			grid-template-columns: auto auto;
			margin-bottom: 42px;
		}

		// pc でのみ表示
		.message-code-flame {
			position: relative;
			height: 100%;

			:global(.message-code) {
				position: absolute;
				top: 0;
				right: 0;
				width: auto;
				height: 100%;
				margin-right: 8px;
				transform: translateX(50%);
			}
		}

		.heading {
			margin-left: 24px;
		}

		.h2 {
			font-size: rpx(clamp(40px, 82rpx, 92px), pc);
			text-align: center;
		}
		.p {
			font-size: rpx(min(16px, 16rpx), pc);
			text-align: center;
		}

		.buttons {
			display: flex;
			gap: 0 32px;

			:global(.button) {
				padding: 32px 0;
			}
		}
	}
</style>
