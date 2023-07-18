<script lang="ts">
	export let data
</script>

<section>
	{#if data.categories.length}
		{#each data.categories as category}
			<a href="/category/{category.name}">{category.name}</a>
		{/each}
	{/if}
</section>
