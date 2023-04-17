<svelte:head>
	<title>CONTACT | 株式会社イトナブ</title>
</svelte:head>
<div
	class="app-page app-page-padding-y app-section-padding-x app-limit-design-max-width"
>
	<h1 class="app-h1">
		<span class="app-h1">C</span>
		<span class="app-h1">O</span>
		<span class="app-h1">N</span>
		<span class="app-h1">T</span>
		<span class="app-h1">A</span>
		<span class="app-h1">C</span>
		<span class="app-h1">T</span>
		<br />
		<div>
			<span class="app-sub-h1">I</span>
			<span class="app-sub-h1">T</span>
			<span class="app-sub-h1">N</span>
			<span class="app-sub-h1">A</span>
			<span class="app-sub-h1">V</span>
		</div>
	</h1>
</div>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.app-h1 span {
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
			animation-delay: 580ms;
		}
		&:nth-child(8) {
			animation-duration: 540ms;
			animation-delay: 580ms;
		}
	}

	@keyframes fade-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@include pc {
		.app-h1 {
			text-indent: -8px;
			letter-spacing: -8px;
		}
	}
</style>
