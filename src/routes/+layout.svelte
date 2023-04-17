<script lang="ts">
	import './styles.scss';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Header from './+layout/Header.svelte';
	import Drawer from './+layout/drawer/Drawer.svelte';
	import Footer from './+layout/footer/Footer.svelte';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: false,
			},
		},
	});
</script>

<QueryClientProvider client={queryClient}>
	<Header />

	<main class="main">
		<slot />
	</main>

	<Drawer />

	<Footer />
</QueryClientProvider>

<style scoped lang="scss">
	.main {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
