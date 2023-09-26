<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container">
	<h1><a href="/">Unique.</a></h1>
	<div class="version">(v0.1)</div>
	<div class="wrapper">
		<slot />
	</div>
	<footer>
		<nav>
			{#if $page.url.pathname !== '/about'}
				<a href="/about">About</a>
			{:else}
				<a href="/">Home</a>
			{/if}
		</nav>
		<div class="project-by">
			A project by <a href="https://github.com/cyrilf">cyrilf</a>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: rgba(200, 225, 225, 1);
		font-family: 'Vollkorn', serif;
	}

	.container {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.wrapper {
		display: flex;
		flex: 1;
		align-items: center;
	}
	h1 {
		margin: 2rem;
		margin-bottom: 0;
	}
	h1 a {
		color: black;
		text-decoration: none;
	}

	.version {
		margin-top: -0.7rem;
		margin-left: 2rem;
		padding-left: 4.5rem;
		color: rgba(0, 0, 0, 0.5);
		font-style: italic;
	}

	footer {
		position: relative;
		margin: 3rem;
		padding: 0 3rem;
		display: flex;
		justify-content: center;
	}
	footer a {
		color: black;
	}
	footer a:hover {
		color: grey;
	}

	footer nav {
		flex: 12;
		text-align: center;
	}

	footer .project-by {
		position: absolute;
		right: 1rem;
		color: grey;
	}
	footer .project-by a {
		color: grey;
	}
</style>
