<script lang="ts">
	export let data
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<section>
	{#if data.bookmarks.length}
		{#each data.bookmarks as bookmark}
			<p>
				<a href={bookmark.location} target="_blank" rel="noopener noreferrer">
					{bookmark.title}
				</a>
				<span>
					{#if bookmark.categories.length}
						{#each bookmark.categories as category}
							<span><a href="/">{category.name}</a></span>
						{/each}
					{/if}
				</span>
			</p>
		{/each}
	{/if}
</section>
