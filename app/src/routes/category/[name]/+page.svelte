<script lang="ts">
	export let data

	$: console.log(data)
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<section>
	{#if data.bookmarks.length}
		{#each data.bookmarks as bookmark}
			<a href={bookmark.location} target="_blank">{bookmark.title}</a>
			{#if bookmark.categories.length}
				{#each bookmark.categories as category}
					<a href="/category/{category.name}">{category.name}</a>
				{/each}
			{/if}
		{/each}
	{/if}
</section>
