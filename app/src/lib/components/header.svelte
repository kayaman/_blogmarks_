<script lang="ts">
	import BlogmarksLM from '$lib/components/blogmarks_light_mode.svelte'
	import BlogmarksDM from '$lib/components/blogmarks_dark_mode.svelte'
</script>

<header>
	<BlogmarksDM />
	<p>my Bookmarks</p>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding-inline-end: var(--size-fluid-2);
	}

	header p {
		font-size: var(--size-2);
		font-weight: 600;
		letter-spacing: 0.5px;
		white-space: pre-wrap;
	}
</style>
