<script lang="ts">
	import TopBlogSection from './+page/sections/TopBlogSection.svelte';
	import TopFirstSection from './+page/sections/TopFirstSection.svelte';
	import TopLastSection from './+page/sections/TopLastSection.svelte';
	import TopOurMissionSection from './+page/sections/TopOurMissionSection.svelte';
	import TopServiceSection from './+page/sections/TopServiceSection.svelte';
	import TopThreeElements from './+page/sections/TopThreeElements.svelte';
	import TopWeAreHiringSection from './+page/sections/TopWeAreHiringSection.svelte';
</script>

<svelte:head>
	<title>株式会社イトナブ</title>
	<meta
		name="description"
		content="宮城県石巻市のIT企業イトナブのホームページです。イトナブとは「IT」×「遊ぶ」×「学ぶ」×「営む」×「イノベーション」の造語からできており、未来を担う若者達に学ぶ環境と機会を作っております。"
	/>
</svelte:head>

<div class="app-page">
	<TopFirstSection />

	<TopOurMissionSection />

	<TopThreeElements />

	<TopServiceSection />

	<TopBlogSection />

	<TopWeAreHiringSection />

	<TopLastSection />
</div>
