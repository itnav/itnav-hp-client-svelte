<script lang="ts">
	import AboutCompanyProfile from './sections/AboutCompanyProfile.svelte';
	import AboutMessage from './sections/AboutMessage.svelte';
	import AboutMissionSection from './sections/AboutMissionSection.svelte';
	import AboutValueSection from './sections/AboutValueSection.svelte';
	import AboutVisionSection from './sections/AboutVisionSection.svelte';
</script>

<svelte:head>
	<title>ABOUT | 株式会社イトナブ</title>
	<meta
		name="description"
		content="イトナブのMISSION、VISION、VALUE、イトナブ代表取締役 古山隆幸からのメッセージ、会社概要に関する詳しい情報を紹介しています"
	/>
</svelte:head>
<div class="app-page app-page-padding-y">
	<h1 class="h1 app-h1 app-section-padding-x app-limit-design-max-width">
		<span class="app-sub-h1">A</span>
		<span class="app-sub-h1">B</span>
		<span class="app-sub-h1">O</span>
		<span class="app-sub-h1">U</span>
		<span class="app-sub-h1">T</span>

		<br />

		<div class="app-h1-group">
			<span class="app-h1">I</span>
			<span class="app-h1">T</span>
			<span class="app-h1">N</span>
			<span class="app-h1">A</span>
			<span class="app-h1">V</span>
		</div>
	</h1>

	<AboutMissionSection />

	<AboutVisionSection />

	<AboutValueSection />

	<AboutMessage />

	<AboutCompanyProfile />
</div>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.h1 {
		margin-bottom: 48px;
		overflow: hidden;
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
	}

	@keyframes fade-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@include pc {
		.h1 {
			margin-bottom: 104px;
		}
	}
</style>
