<script lang="ts">
	import AChanSvg from './svg/AChanSvg.svelte';
	import AshSvg from './svg/AshSvg.svelte';
	import BankSvg from './svg/BankSvg.svelte';
	import DanNeiSvg from './svg/DanNeiSvg.svelte';
	import FuruyamaSvg from './svg/FuruyamaSvg.svelte';
	import GakuSvg from './svg/Gaku.svelte';
	import GenkiSvg from './svg/GenkiSvg.svelte';
	import GuraSvg from './svg/GuraSvg.svelte';
	import HinodeSvg from './svg/HinodeSvg.svelte';
	import KuboSvg from './svg/KuboSvg.svelte';
	import KurosawaSvg from './svg/KurosawaSvg.svelte';
	import KyuChanSvg from './svg/KyuChanSvg.svelte';
	import LeafSvg from './svg/LeafSvg.svelte';
	import OzakiSvg from './svg/OzakiSvg.svelte';
	import PenSvg from './svg/PenSvg.svelte';
	import PoseSvg from './svg/PoseSvg.svelte';
	import RenRenSvg from './svg/RenRenSvg.svelte';
	import SansanSvg from './svg/SansanSvg.svelte';
	import ShigureSvg from './svg/ShigureSvg.svelte';
	import TakanaSvg from './svg/TakanaSvg.svelte';
	import TamaSvg from './svg/TamaSvg.svelte';
	import YottuSvg from './svg/YottuSvg.svelte';
	import YuzaSvg from './svg/YuzaSvg.svelte';
	import type { SvelteComponent } from 'svelte';

	interface Member {
		nickname: string;
		name: string;
		role: string;
		SVG: typeof SvelteComponent;
	}

	const MEMBER_LIST = [
		{
			nickname: 'ふるやま',
			name: '古山 隆幸',
			role: 'CEO',
			SVG: FuruyamaSvg,
		},
		{
			nickname: '黒沢',
			name: '黒沢 高',
			role: 'GTO',
			SVG: KurosawaSvg,
		},
		{
			nickname: '尾崎',
			name: '尾崎 健一',
			role: '取締役',
			SVG: OzakiSvg,
		},
		{
			nickname: '久保',
			name: '久保 昇也',
			role: 'CTO',
			SVG: KuboSvg,
		},
		{
			nickname: '日の出',
			name: '武山 将己',
			role: '教育部 部長',
			SVG: HinodeSvg,
		},
		{
			nickname: '高菜',
			name: '遠藤 匠',
			role: '開発部',
			SVG: TakanaSvg,
		},
		{
			nickname: 'Pen',
			name: '菅原 洋介',
			role: 'ソーシャル',
			SVG: PenSvg,
		},
		{
			nickname: 'たま',
			name: '金光 沙織',
			role: '広報',
			SVG: TamaSvg,
		},
		{
			nickname: 'よっつ',
			name: '金光 宏',
			role: '教育部',
			SVG: YottuSvg,
		},
		{
			nickname: 'さんさん',
			name: '佐々木 翼',
			role: '総務',
			SVG: SansanSvg,
		},
		{
			nickname: 'だん姉',
			name: '嶋脇 久恵',
			role: '経理部 / 総務部',
			SVG: DanNeiSvg,
		},

		{
			nickname: 'げんき',
			name: '阿部 海飛',
			role: '開発部',
			SVG: GenkiSvg,
		},
		{
			nickname: 'ポセ',
			name: '菊地 拓也',
			role: '開発部',
			SVG: PoseSvg,
		},
		{
			nickname: 'ガク',
			name: '菅原 大樹',
			role: '開発部',
			SVG: GakuSvg,
		},
		{
			nickname: 'れんれん',
			name: '八重樫 蓮',
			role: '教育部',
			SVG: RenRenSvg,
		},
		{
			nickname: 'リーフ',
			name: '杉本 洸柊',
			role: '開発部',
			SVG: LeafSvg,
		},
		{
			nickname: 'あーちゃん',
			name: '渥美 優花',
			role: 'BX事業部',
			SVG: AChanSvg,
		},
		{
			nickname: 'きゅうちゃん',
			name: '村上 柚香',
			role: '開発部',
			SVG: KyuChanSvg,
		},
		{
			nickname: 'あっしゅ',
			name: '佐々木 栞',
			role: '開発部',
			SVG: AshSvg,
		},
		{
			nickname: 'ユーザ',
			name: '伊藤 啓大',
			role: '開発部',
			SVG: YuzaSvg,
		},
		{
			nickname: 'ぐら',
			name: '三浦 純平',
			role: '開発部',
			SVG: GuraSvg,
		},
		{
			nickname: 'シグレ',
			name: '木村 真人',
			role: '開発部',
			SVG: ShigureSvg,
		},
		{
			nickname: 'バンク',
			name: '阿部 太一',
			role: '教育部 / BX事業部',
			SVG: BankSvg,
		},
	] satisfies Readonly<Member[]>;
</script>

<svelte:head>
	<title>MEMBER | 株式会社イトナブ</title>
	<meta
		name="description"
		content="イトナブ所属メンバーの紹介ページです。イトナブ代表取締役 古山隆幸を中心に個性豊かなイトナブメンバーたちのプロフィールがご覧いただけます。"
	/>
</svelte:head>
<section
	class="app-page-padding-y app-section-padding-x app-limit-design-max-width"
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
			<span class="app-h1">M</span>
			<span class="app-h1">E</span>
			<span class="app-h1">M</span>
			<span class="app-h1">B</span>
			<span class="app-h1">E</span>
			<span class="app-h1">R</span>
		</div>
	</h1>

	<div class="members">
		{#each MEMBER_LIST as member}
			<div class="member">
				<svelte:component this={member.SVG} class="svg" />
				<span class="nickname">{member.nickname}</span>
				<div class="role">{member.role}</div>
			</div>
		{/each}
	</div>
</section>

<style scoped lang="scss">
	@use '../../styles/scss' as *;

	.h1 {
		margin-bottom: 80px;
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

		@keyframes fade-up {
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
		&:nth-child(7) {
			animation-duration: 540ms;
			animation-delay: 640ms;
		}
	}

	.members {
		display: grid;
		grid-template-rows: repeat(auto-fit, minmax(280px, 1fr));
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-gap: 64px;

		:global(.svg) {
			aspect-ratio: 1;
			opacity: 0.6;
		}
	}

	.nickname {
		display: block;
		margin: 8px 0;
		font-size: 16px;
		font-weight: 500;
		text-align: center;
	}

	.role {
		display: block;
		font-size: 14px;
		font-weight: 700;
		color: $black-grey;
		text-align: center;
	}
</style>
