<script lang="ts">
	import * as config from '$lib/config'
	import { Github, Linkedin, Twitter, Instagram, Code2, FileText } from 'lucide-svelte'
</script>

<footer>
	<p class="copy">{config.title} &copy; {new Date().getFullYear()}</p>
	<div class="icons">
		<a href="https://github.com/kayaman" target="_blank"
			><Github aria-label="GitHub" display="inline" size="22" /></a
		>
		<a href="https://github.com/kayaman/marcosh" target="_blank"
			><Code2 aria-label="Blog" display="inline" size="24" /></a
		>
		<a href="https://linkedin.com/in/marcoantoniogonzalezjunior" target="_blank"
			><Linkedin display="inline" size="24" aria-label="LinkedIn" /></a
		>
		<a
			href="https://github.com/kayaman/resume/blob/main/MarcoAntonioGonzalezJunior_en.pdf"
			target="_blank"><FileText aria-label="Résumé" display="inline" size="24" /></a
		>
		<a href="https://twitter.com/kayaman" target="_blank"
			><Twitter aria-label="Twitter" display="inline" size="24" /></a
		>
		<a href="https://instagram.com/marcoantoniogonzalezjunior" target="_blank"
			><Instagram aria-label="Instagram" display="inline" size="24" /></a
		>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: row;
		flex-flow: nowrap;
		justify-content: space-between;
		padding-block: var(--size-5);
		border-top: 1px solid var(--border);
	}

	p {
		font-size: var(--size-3);
		color: var(--text-1);
		vertical-align: middle;
	}

	a {
		display: inline-flex;
		color: var(--text-1);
	}

	@media (width <= 480px) and (orientation: portrait) {
		footer {
			align-items: center;
			justify-content: center;
		}

		.copy {
			display: none;
		}

		.icons {
			padding-block-start: var(--size-fluid-7);
		}
	}
</style>
