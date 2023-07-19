<script lang="ts">
	import '@fontsource/poppins'

	import Header from '$lib/components/header.svelte'
	import Navbar from '$lib/components/navbar.svelte'
	import Footer from '$lib/components/footer.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../styles.css'
</script>

<div class="container">
	<div class="header">
		<Header />
		<Navbar />
	</div>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.container {
		display: grid;
		max-inline-size: 1440px;
		height: 100%;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-3);
	}

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	main {
		padding-block: var(--size-1);
	}

	@media (min-width: 1440px) {
		.container {
			padding-inline: 0;
		}
	}
</style>
