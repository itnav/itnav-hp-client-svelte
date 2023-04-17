<svelte:options immutable={true} />

<script lang="ts">
	import { visible } from '@/directives/visible';
	import { ROUTE } from '@/router';
	import BaseMaintenancePngPath from '../images/service-base-maintenance.png';
	import BreedingPngPath from '../images/service-breeding.png';
	import InteractionPngPath from '../images/service-interaction.png';
	import LecturePartyPngPath from '../images/service-lecture-party.png';
	import MaterialDevelopmentPngPath from '../images/service-material-development.png';
	import SupportPngPath from '../images/service-support.png';

	// この section の id
	export let id: string;

	interface Service {
		thumbnail: string;
		title: string;
		description: string;
	}

	// TODO: 恐らく DB から引っ張ってく流想定
	const SERVICES = (<const>[
		{
			thumbnail: BreedingPngPath,
			title: '若手プログラミング人材育成事業',
			description:
				'小学生から大学生を対象に、自治体と連携し、地域の若者たちにプログラミングを学んでもらい、将来学んで技術で活躍できる人材に育成する事業',
		},
		{
			thumbnail: BaseMaintenancePngPath,
			title: '人材育成拠点整備事業',
			description:
				'技術を学んでいる学生たちが集まれる拠点を整備し、新しい仲間たちと出会え、新しい技術に触れ合える場所を整備する事業',
		},
		{
			thumbnail: InteractionPngPath,
			title: '人材マッチング事業・人材交流事業',
			description:
				'技術を学んでいる学生と、技術者を必要としている会社をマッチング・交流する事業',
		},
		{
			thumbnail: SupportPngPath,
			title: 'GIGAスクールサポート事業',
			description:
				'GIGAスクール構想にて、小学校・中学校に提供されるPCの利用方法やマニュアル作成・教師へのサポートなどを実施する事業',
		},
		{
			thumbnail: LecturePartyPngPath,
			title: '講演会等',
			description:
				'地域IT人材育成や地方創生などプログラミング人材育成を主軸なテーマにて講演会を実施。小学校〜大学でのキャリアセミナーなども行っている',
		},
		{
			thumbnail: MaterialDevelopmentPngPath,
			title: '教材開発事業',
			description: '企画研修など教育教材の開発を実施中',
		},
	]) satisfies Readonly<Service[]>;

	function getNumber(index: number) {
		return ('00' + (index + 1)).slice(-2);
	}
</script>

<section class="section">
	<h2 {id} class="h2 app-black-slide">Educational Project</h2>
	<h3 class="service-h3 app-black-slide">教育事業</h3>

	<div class="projects">
		{#each SERVICES as service, i}
			<div class="project" use:visible={{ threshold: 0.5 }}>
				<span class="project-count app-mono">{getNumber(i)}</span>
				<div class="project-thumbnail-flame  app-img-slide">
					<img
						class="project-thumbnail"
						src={service.thumbnail}
						alt={service.title}
					/>
				</div>
				<div class="project-content">
					<h4 class="project-title">{service.title}</h4>
					<p class="project-description">{service.description}</p>
				</div>
			</div>
		{/each}
	</div>

	<a
		class="bottom-button"
		href={ROUTE.contact.href}
		target="_blank"
		rel="noopener noreferrer"
		>教育事業について相談する<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class="icon"
			width="28px"
			height="28px"
		>
			<path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z" />
		</svg></a
	>
</section>

<style scoped lang="scss">
	@use '../../../styles/scss' as *;

	.section {
		margin-bottom: 48px;
	}

	.h2 {
		margin-bottom: 4px;
		font-size: 5.6vw;
		letter-spacing: 1.4px;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 96px;
		justify-content: center;
		margin-bottom: 40px;
	}
	.project {
		display: grid;
		grid-template-rows: auto 2fr 1fr;
		margin-bottom: 24px;
		opacity: 0;
		transition-timing-function: ease-in-out;
		transition-duration: 600ms;
		transition-property: opacity, transform;
		transform: translateY(20px);
	}
	:global(.visible) {
		&.project {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.project-count {
		font-size: 56px;
		font-weight: bold;
	}
	.project-thumbnail-flame {
		position: relative;
		aspect-ratio: 3/3;
		margin-bottom: 16px;
	}

	.app-img-slide::before {
		background-color: #fff;
	}

	.project-thumbnail {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-title {
		margin-bottom: 12px;
		font-size: 22px;
		letter-spacing: 2.4px;
	}

	.bottom-button {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 24px;
		font-size: 18px;

		text-align: left;
		border: 2px solid $black;
	}

	.bottom-button .icon {
		margin-left: 28px;
	}

	@include pc {
		.section {
			margin-bottom: 160px;
		}

		.h2 {
			margin-bottom: 8px;
		}

		.projects {
			margin-bottom: 120px;
		}
		.project-thumbnail-flame {
			aspect-ratio: 3 / 3.5;
			margin-bottom: 24px;
		}
		.project-title {
			margin-bottom: 24px;
			font-size: 22px;
			font-weight: bold;
		}

		.bottom-button {
			box-sizing: border-box;
			padding: 48px 0;
			font-size: 22px;
			text-align: center;
		}
	}
</style>
