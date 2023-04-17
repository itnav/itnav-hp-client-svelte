<script lang="ts">
	import ServiceTopNav from './ServiceTopNav.svelte';
	import ServiceDevelopmentBusiness from './sections/ServiceDevelopmentBusiness.svelte';
	import ServiceEducationalProject from './sections/ServiceEducationalProject.svelte';
	import type { ServicesPageSectionIdMap } from './+page.d';

	const sectionIdMap = (<const>{
		developmentBusiness: 'development-business',
		educationalProject: 'educational-project',
		socialProject: 'social-project',
	}) satisfies Readonly<ServicesPageSectionIdMap>;
</script>

<svelte:head>
	<title>SERVICE | 株式会社イトナブ</title>
	<meta
		name="description"
		content="イトナブが行なっている小学生から大学生を対象にした横須賀プログラミングアカデミーなどの教育事業、webサイト制作などの開発事業、ソーシャルプロジェクトについて詳しく紹介しています。"
	/>
</svelte:head>
<div
	class="service app-page app-page-padding-y app-section-padding-x app-limit-design-max-width"
>
	<h1 class="h1 app-h1">
		<span class="app-sub-h1">I</span>
		<span class="app-sub-h1">T</span>
		<span class="app-sub-h1">N</span>
		<span class="app-sub-h1">A</span>
		<span class="app-sub-h1">V</span>
		<span class="app-sub-h1">'</span>
		<span class="app-sub-h1">s</span>

		<br />

		<div class="app-h1-group">
			<span class="app-h1">S</span>
			<span class="app-h1">E</span>
			<span class="app-h1">R</span>
			<span class="app-h1">V</span>
			<span class="app-h1">I</span>
			<span class="app-h1">C</span>
			<span class="app-h1">E</span>
		</div>
	</h1>

	<ServiceTopNav idMap={sectionIdMap} />

	<ServiceEducationalProject id={sectionIdMap.educationalProject} />

	<ServiceDevelopmentBusiness id={sectionIdMap.developmentBusiness} />
</div>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.service {
		// service ページ内でのグローバルスタイル
		:global(.service-h2) {
			// ページ内リンクの上部マージンを調整
			@include anchor-link-margin(88px);
			font-size: rpx(max(24px, 56rpx), pc);
			letter-spacing: 1.4px;
		}
		:global(.service-h3) {
			margin-bottom: 56px;
			font-size: 16px;
			letter-spacing: 2.2px;
		}
	}

	.h1 {
		box-sizing: border-box;
		margin-bottom: 16px;
	}

	.app-h1 .app-sub-h1 {
		text-indent: -8px;
		letter-spacing: -8px;
	}

	.app-h1-group .app-h1 {
		text-indent: -8px;
		letter-spacing: -8px;
	}

	.h1 span {
		display: inline-block;
		opacity: 0;
		transform: translateY(100%);
		transform-origin: bottom;
		animation-name: fade-up;
		animation-fill-mode: forwards;
		animation-timing-function: transition-timing-function(ease-out);

		&:nth-child(1) {
			animation-duration: 540ms;
			animation-delay: 180ms;
		}
		&:nth-child(2) {
			animation-duration: 540ms;
			animation-delay: 260ms;
		}
		&:nth-child(3) {
			animation-duration: 540ms;
			animation-delay: 340ms;
		}
		&:nth-child(4) {
			animation-duration: 540ms;
			animation-delay: 420ms;
		}
		&:nth-child(5) {
			animation-duration: 540ms;
			animation-delay: 500ms;
		}
		&:nth-child(6) {
			animation-duration: 540ms;
			animation-delay: 580ms;
		}
		&:nth-child(7) {
			animation-duration: 540ms;
			animation-delay: 640ms;
		}
	}

	@keyframes fade-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@include pc {
		.service {
			// service ページ内でのグローバルスタイル
			:global(.service-h2) {
				font-size: rpx(72px, pc);
			}
			:global(.service-h3) {
				margin-bottom: 64px;
				font-size: 30px;
			}
		}

		.h1 {
			position: relative;
			padding-bottom: 16px;
			margin-bottom: 64px;
			// border-bottom: 20px solid black;
			&::after {
				position: absolute;
				bottom: -24px;
				left: 0;
				width: 100%;
				height: 20px;
				content: '';
				background: $black;
				animation-name: under-line-animation;
				animation-duration: 820ms;
				animation-fill-mode: both;
			}
		}

		@keyframes under-line-animation {
			0% {
				transform: scaleX(0);
				transform-origin: left;
			}
			100% {
				transform: scaleX(1);
				transform-origin: left;
			}
		}
	}
</style>
