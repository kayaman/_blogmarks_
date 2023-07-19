<svelte:options accessors={true} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	let shown = false
	let check = false
	let dispatch = createEventDispatcher()

	export function show() {
		shown = !shown
		check = !check
		dispatch('show', { shown })
	}

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
		<li class="toggle"><Toggle /></li>
		<li>
			<label class="hamburger-menu">
				<input type="checkbox" bind:checked={check} on:click={show} />
			</label>
		</li>
	</ul>
</nav>

{#if shown}
	<aside class="sidebar">
		<ul>
			<li><a href="/categories">Categories</a></li>
			<li><a href="/categories">Categories</a></li>
			<li><a href="/categories">Categories</a></li>
		</ul>
	</aside>
{/if}

<style>
	:root {
		--bar-width: 24px;
		--bar-height: 5px;
		--sidebar-width: 200px;
		--sidebar-height: 88px;
		--hamburger-gap: 3px;
		--hamburger-padding: var(--bar-width);
		--foreground: #aaa;
		--background: #000;
		--hamburger-margin: 8px;
		--hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
		--animation-timing: 200ms ease-in-out;
	}
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
			gap: var(--size-fluid-2);
		}

		.toggle {
			width: max-content;
			align-self: center;
		}
		form input {
			width: var(--size-fluid-8);
			height: var(--size-fluid-4);
			border: 1px solid var(--border);
			border-radius: var(--size-2);
		}
	}

	@media (width > 480px) {
		.mobile-only {
			display: none;
		}
	}

	.hamburger-menu {
		--x-width: calc(var(--hamburger-height) * 1.41421356237);

		display: flex;
		flex-direction: column;
		gap: var(--hamburger-gap);
		width: max-content;
		position: sticky;
		top: var(--hamburger-margin);
		right: var(--hamburger-margin);
		z-index: 2;
		cursor: pointer;
		padding-left: var(--hamburger-wide);
	}

	.hamburger-menu:has(input:checked) {
		--foreground: white;
		--background: #333;
	}

	.hamburger-menu:has(input:focus-visible)::before,
	.hamburger-menu:has(input:focus-visible)::after,
	.hamburger-menu input:focus-visible {
		border: 1px solid var(--background);
		box-shadow: 0 0 0 1px var(--foreground);
	}

	.hamburger-menu::before,
	.hamburger-menu::after,
	.hamburger-menu input {
		content: '';
		width: var(--bar-width);
		height: var(--bar-height);
		background-color: var(--foreground);
		border-radius: 9999px;
		transform-origin: left center;
		transition: opacity var(--animation-timing), width var(--animation-timing),
			rotate var(--animation-timing), translate var(--animation-timing),
			background-color var(--animation-timing);
	}

	.hamburger-menu input {
		appearance: none;
		padding: 0;
		margin: 0;
		outline: none;
		pointer-events: none;
	}

	.hamburger-menu:has(input:checked)::before {
		rotate: 45deg;
		width: var(--x-width);
		translate: 0 calc(var(--bar-height) / -2);
	}

	.hamburger-menu:has(input:checked)::after {
		rotate: -45deg;
		width: var(--x-width);
		translate: 0 calc(var(--bar-height) / 2);
	}

	.hamburger-menu input:checked {
		opacity: 0;
		width: 0;
	}

	.sidebar {
		transition: translate var(--animation-timing);
		/* translate: -100%; */
		padding: 0.5rem 1rem;
		padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem);
		background-color: var(--foreground);
		color: var(--background);
		max-width: 10rem;
		min-height: 50vh;
		position: absolute;
		top: 0;
		right: 0;
	}

	.hamburger-menu:has(input:checked + .sidebar) {
		translate: 0;
	}
</style>
