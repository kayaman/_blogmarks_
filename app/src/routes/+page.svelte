<script lang="ts">
	export let data
</script>

<section>
	{#if data.bookmarks.length}
		{#each data.bookmarks as bookmark}
			<article>
				<a href={bookmark.location} target="_blank" rel="noopener noreferrer">
					{bookmark.title}
				</a>
				<span>
					{#if bookmark.categories.length}
						{#each bookmark.categories as category}
							<span><a href="/category/{category.name}">{category.name}</a></span>
						{/each}
					{/if}
				</span>
			</article>
		{/each}
	{/if}
</section>
