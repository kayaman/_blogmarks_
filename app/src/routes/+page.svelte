<script lang="ts">
	export let data
</script>

<section>
	{#if data.bookmarks.length}
		{#each data.bookmarks as bookmark}
			<article>
				<h2>
					<a href={bookmark.location} target="_blank" rel="noopener noreferrer">
						{bookmark.title}
					</a>
				</h2>
				<p class="location">
					<a href={bookmark.location} target="_blank" rel="noopener noreferrer">
						{bookmark.location}
					</a>
				</p>
				<p class="categories">
					{#if bookmark.categories.length}
						{#each bookmark.categories as category}
							<div class="category">
								<a href="/category/{category.name}">
									&num;{category.name}
								</a>
							</div>
						{/each}
					{/if}
				</p>
			</article>
		{/each}
	{/if}
</section>

<style>
	:root {
		--category-bg: #e0e0e0;
		--border-bottom-color: var(--gray-4);
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding-block: var(--size-1);
	}

	article h2 {
		font-size: var(--size-fluid-3);
	}
	article:not(:last-child) {
		border-bottom: 0.05rem solid var(--border-bottom-color);
	}
	.location {
		font-size: var(--size-fluid-1);
	}

	.categories {
		font-size: var(--size-fluid-1);
	}

	.category {
		display: inline-block;
		border-radius: var(--size-fluid-1);
		padding-inline: var(--size-1);
		padding-block: var(--size-1);
		border-radius: 2px;
		background: var(--category-bg);
		color: var(--text-color);
		font-weight: 600;
		margin: 0.25em 0.1em;
	}
</style>
