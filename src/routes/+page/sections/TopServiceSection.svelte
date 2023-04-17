<svelte:options immutable={true} />

<script lang="ts">
	import { visible } from '@/directives/visible';
	import { ROUTE } from '@/router';
	import EducationImagePath from './images/education.png';
	import TestImagePath from './images/test.png';
</script>

<section class="section">
	<div class="container">
		<div class="box right-box">
			<div class="content">
				<h3 class="h3">教育事業</h3>
				<p class="p">
					「地方部でも都心に負けないプログラミング教育」をスローガンに、地域の小中学生を対象にプログラミング教室を開いたり、高校の部活動に外部講師として参加したりしています。
				</p>
				<a
					href={ROUTE.about.path}
					aria-label={ROUTE.about.ariaLabel}
					class="link app-underlined-button"
				>
					View more
					<span class="app-underlined-button-arrow" />
				</a>
			</div>
		</div>

		<div class="img-flame app-img-slide" use:visible={{ threshold: 0.3 }}>
			<img class="img" src={EducationImagePath} alt="教育事業に関する画像" />
		</div>
	</div>

	<div class="container">
		<div class="box left-box">
			<div class="content">
				<h3 class="h3">開発事業</h3>
				<p class="p">
					WEBサイト/WEBアプリケーションの受託開発、自社サービスの開発運用などを主に行っています。また、他企業様の業務上の課題をシステム面でサポートしたり、地域のためのWebサービスなどを手掛けたりしています。
				</p>
				<a
					href={ROUTE.about.path}
					aria-label={ROUTE.about.ariaLabel}
					class="link app-underlined-button"
				>
					View more
					<span class="app-underlined-button-arrow" />
				</a>
			</div>
		</div>

		<div
			class="img-flame right-img-flame app-img-slide"
			use:visible={{ threshold: 0.3 }}
		>
			<img class="img" src={TestImagePath} alt="開発事業に関する画像" />
		</div>
	</div>

	<div class="text-align-right app-outer-padding-x">
		<a
			href={ROUTE.services.path}
			aria-label={ROUTE.service.ariaLabel}
			class="app-underlined-button"
		>
			All Services
			<span class="app-underlined-button-arrow" />
		</a>
	</div>

	<div class="service-bg">
		<!-- prettier-ignore -->
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 144" transform="scale(1.02)"><path fill="none" stroke="#222" stroke-width="1.2" d="M48.805.589c-14.4 0-25.78 3.501-34.136 10.506C6.31 17.97 2.132 27.635 2.132 40.088c0 6.357 1.093 11.805 3.28 16.345 2.185 4.54 4.95 8.433 8.293 11.676 3.471 3.114 7.07 5.772 10.798 7.977 3.729 2.076 7.201 3.893 10.415 5.45 5.143 2.464 9.707 4.798 13.693 7.004 3.986 2.075 7.137 4.346 9.451 6.81 2.443 2.465 3.663 5.448 3.663 8.95 0 4.281-1.541 7.848-4.627 10.702-2.957 2.724-8.037 4.088-15.238 4.088-6.942 0-13.948-1.17-21.02-3.504A313.756 313.756 0 0 1 .59 107.609v27.437c11.443 5.578 24.43 8.365 38.958 8.365 16.2 0 28.672-3.632 37.415-10.897 8.872-7.394 13.306-17.252 13.306-29.575 0-7.265-1.35-13.363-4.05-18.292-2.7-4.93-6.557-9.21-11.571-12.842-4.886-3.633-10.865-7.134-17.936-10.507-8.615-4.15-15.108-7.654-19.48-10.508-4.37-2.854-6.556-6.745-6.556-11.674 0-4.151 1.48-7.523 4.437-10.118 2.957-2.594 7.2-3.893 12.728-3.893 5.272 0 10.413.714 15.428 2.141 5.014 1.427 10.672 3.437 16.972 6.032l9.451-22.96c-7.071-3.114-13.886-5.513-20.443-7.2C62.819 1.432 56.005.588 48.805.588zm599.212 0c-13.886 0-25.65 3.048-35.293 9.145-9.515 6.097-16.779 14.529-21.793 25.296-5.014 10.767-7.523 23.155-7.523 37.165 0 14.27 2.188 26.788 6.559 37.555 4.371 10.637 11.12 18.938 20.25 24.905 9.257 5.837 20.957 8.756 35.1 8.756 7.328 0 13.95-.582 19.864-1.75 5.914-1.167 11.893-2.985 17.936-5.45V111.5c-6.557 2.335-12.664 4.152-18.321 5.45a73.21 73.21 0 0 1-16.779 1.945c-12.086 0-20.893-4.023-26.421-12.065-5.4-8.173-8.102-19.653-8.102-34.441 0-14.659 2.958-26.203 8.872-34.635 5.915-8.431 14.465-12.649 25.651-12.649 5.015 0 10.093.91 15.236 2.725a146.666 146.666 0 0 1 15.62 6.42l9.452-23.932c-6.3-2.984-12.922-5.318-19.865-7.004-6.814-1.817-13.628-2.725-20.443-2.725zM123.054 2.534v138.932h79.266v-24.323h-50.144V81.34h46.671V57.212h-46.67v-30.55h50.143V2.534zm115.716 0v138.932h29.122V88.15h15.62l32.787 53.315H348.7l-40.5-60.514a55.58 55.58 0 0 0 12.534-7.98 37.395 37.395 0 0 0 9.451-12.062c2.443-4.8 3.665-10.379 3.665-16.735 0-14.01-4.501-24.453-13.501-31.328-8.872-6.875-22.692-10.313-41.463-10.313zm117.645 0 46.67 138.932h31.823L481.773 2.534h-29.507L426.23 85.231c-.386 1.427-1.094 4.087-2.122 7.979a401.56 401.56 0 0 0-3.086 12.063c-.9 4.151-1.542 7.654-1.928 10.508-.386-2.854-1.093-6.357-2.122-10.508a401.47 401.47 0 0 0-3.086-12.063c-.9-3.892-1.607-6.552-2.121-7.979L385.922 2.534zm139.242 0V19.27l16.78 7.782v89.898l-16.78 7.784v16.733h62.681v-16.733l-16.78-7.784V27.051l16.78-7.782V2.534zm224.488 0v138.932h79.266v-24.323h-50.144V81.34h46.673V57.212h-46.673v-30.55h50.144V2.534zM267.892 26.662h8.872c9.514 0 16.457 1.428 20.828 4.282 4.5 2.724 6.75 7.394 6.75 14.01 0 6.356-2.122 11.156-6.364 14.399-4.115 3.243-10.992 4.863-20.635 4.863h-9.451z" /></svg>
	</div>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		position: relative;
		box-sizing: border-box;
		// 基本的に .section クラスには margin-top や padding-top は指定しないが、今回はレイアウトが特殊であるため例外とする
		padding-top: 12vw;
		margin-bottom: 72px;
	}

	.h3 {
		margin-bottom: 24px;
		font-size: 20px;
	}

	.p {
		margin-bottom: 28px;
	}

	$box-height-half: 16%;
	.box {
		box-sizing: border-box;
		width: 80%;
		padding: 40px 40px $box-height-half;
		color: $white;
		background-color: $black;
	}
	.right-box {
		margin-left: auto;
	}

	.text-align-right {
		text-align: right;
	}

	.link {
		margin-bottom: 56px;
	}

	.img-flame {
		width: 88%;
		padding-top: $box-height-half * 2;
		margin-top: -$box-height-half;
		margin-bottom: 32px;
		opacity: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 600ms;
		transition-property: opacity, transform;
		transform: translateY(20px);
	}
	:global(.visible) {
		&.img-flame {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.right-img-flame {
		right: 0;
		margin-left: auto;
	}
	.img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.service-bg {
		position: absolute;
		top: -16px;
		left: 0;
		z-index: -1;
		width: 100%;
		padding: 8px 0;
		overflow-x: hidden;
		overflow-y: visible;
	}

	@include pc {
		.section {
			padding-top: 8vw;
			margin-bottom: 160px;
		}

		.container {
			position: relative;
		}

		$content-img-margin: 8%;
		.box {
			box-sizing: border-box;
			width: 56%;
			padding: 0;
			margin-bottom: $content-img-margin * 2;
		}

		.left-box {
			padding-right: 4%;
			margin-right: auto;
		}
		.right-box {
			padding-left: 4%;
			margin-left: auto;
		}

		.content {
			box-sizing: border-box;
			padding: 88px $outer-padding-pc-right;
		}

		.img-flame {
			position: absolute;
			top: 0;
			width: 48%;
			height: 100%;
			padding: 0;
			margin: 0;
			margin-top: $content-img-margin;
		}

		.link {
			margin-bottom: 0;
		}

		.h3 {
			font-size: 30px;
		}

		.service-bg {
			top: -24px;
		}
	}
</style>
