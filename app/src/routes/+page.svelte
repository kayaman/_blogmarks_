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
					<!-- {#if bookmark.category.length}
            {#each bookmark.category as category}
              <span>{category}</span>
            {/each}
          {/if} -->
				</span>
			</p>
		{/each}
	{/if}
</section>
