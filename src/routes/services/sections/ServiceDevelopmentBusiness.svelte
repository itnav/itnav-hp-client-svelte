<svelte:options immutable={true} />

<script lang="ts">
	import OutlinedButton from '@/components/buttons/OutlinedButton.svelte';
	import { ROUTE } from '@/router';

	// この section の id
	export let id: string;
</script>

<section class="section">
	<h2 {id} class="h2 service-h2">Development Business</h2>
	<h3 class="service-h3">開発事業</h3>

	<div class="top">
		<p class="top-p">
			WEBサイト/WEBアプリケーションの受託開発、自社サービスの開発運用などを主に行っています。
			<br />
			他企業様が抱えている業務上の課題をシステム面でのサポートや、地域のためのWebサービスなども手掛けています。
		</p>

		<button
			class="top-button app-underlined-button"
			aria-label="開発事例を見る"
		>
			開発事例
			<span class="app-underlined-button-arrow" />
		</button>
	</div>

	<div class="info">
		<ul class="info-list">
			<li class="info-item">
				<span class="info-title">開発言語</span>
				<span>PHP / TypeScript / JavaScript / HTML / SCSS / CSS</span>
			</li>
			<li class="info-item">
				<span class="info-title">ライブラリ</span>
				<span>Vue.js / Express / TypeORM / WordPress / Laravel</span>
			</li>
			<li class="info-item">
				<span class="info-title">インフラ</span>
				<span>Amazon Web Services</span>
			</li>
			<li class="info-item">
				<span class="info-title">使用ツール</span>
				<span>GitLab / Slack / JIRA / Notion</span>
			</li>
		</ul>
	</div>

	<nav class="nav">
		<OutlinedButton
			class="nav-button"
			suffixIcon="internal-link"
			href={ROUTE.contact.href}
			aria-label={ROUTE.contact.ariaLabel}
		>
			仕事の相談をする
		</OutlinedButton>

		<OutlinedButton
			class="nav-button"
			suffixIcon="external-link"
			path={ROUTE.recruit.href}
			aria-label={ROUTE.recruit.ariaLabel}
		>
			イトナブではたらく
		</OutlinedButton>
	</nav>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		margin-bottom: 140px;
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		margin-bottom: 64px;
	}
	.top-p {
		max-width: 520px;
	}
	.top-button {
		margin-top: 16px;
		margin-left: auto;
		font-weight: bold;
		letter-spacing: 2px;
	}

	.info {
		box-sizing: border-box;
		padding: 32px 40px 32px 40px;
		margin-bottom: 40px;
		border-top: 4px solid $black;
		border-bottom: 4px solid $black;
	}
	.info-list {
		display: flex;
		flex-direction: column;
		gap: 24px 0;
		padding: 0;
	}
	.info-item {
		margin-left: 1.4em;
		line-height: 2;
	}
	.info-title {
		display: block;
	}

	.nav {
		display: flex;
		flex-direction: column;
		gap: 24px 0;
		margin-bottom: 64px;
		color: $black;

		:global(.nav-button) {
			box-sizing: border-box;
			width: 100%;
			padding: 24px;
			font-size: 18px;
		}
	}

	@include pc {
		.section {
			margin-bottom: 160px;
		}

		.info {
			box-sizing: border-box;
			padding: 26px 40px;
		}
		.info-list {
			display: grid;
			grid-template-rows: auto auto;
			grid-template-columns: 1fr 1fr;
			gap: 32px 72px;
		}

		.nav {
			flex-direction: row;
			gap: 0 48px;

			:global(.nav-button) {
				font-size: 22px;
			}
		}
	}
</style>
