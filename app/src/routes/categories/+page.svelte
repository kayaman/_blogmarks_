<script lang="ts">
	export let data
	$: console.log(data)
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<section>
	{#if data.categories.length}
		{#each data.categories as category}
			<a href="/category/{category.name}">{category.name}</a>
		{/each}
	{/if}
</section>
