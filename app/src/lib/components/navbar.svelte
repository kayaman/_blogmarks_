<script lang="ts">
	import { Menu } from 'lucide-svelte'
	import Toggle from '$lib/components/toggle.svelte'
</script>

<nav>
	<ul class="desktop-only">
		<li><a href="/categories">Categories</a></li>
		<li><a href="/references">References</a></li>
		<li><a href="/tools">Tools</a></li>
		<li><a href="/about">About</a></li>
		<li><Toggle /></li>
	</ul>
	<ul class="mobile-only">
		<form>
			<input type="search" name="q" placeholder="Search.." />
		</form>
		<li><a href="/"><Menu display="inline" /></a></li>
		<li><Toggle /></li>
	</ul>
</nav>

<style>
	.desktop-only {
		display: flex;
		flex-direction: row;
		flex-flow: nowrap;
		justify-self: flex-end;
		justify-items: flex-end;
		justify-content: end;
		gap: var(--size-2);
	}

	@media (width <= 480px) and (orientation: portrait) {
		.desktop-only {
			display: none;
		}

		.mobile-only {
			display: flex;
			flex-direction: row;
			flex-flow: nowrap;
			align-items: center;
			justify-items: flex-end;
			justify-content: end;
			gap: var(--size-1);
		}

		form input {
			width: var(--size-fluid-8);
			height: var(--size-5);
			padding: var(--size-1);
			border: 1px solid var(--border);
			border-radius: var(--size-2);
		}
	}

	@media (width > 480px) {
		.mobile-only {
			display: none;
		}
	}
</style>
