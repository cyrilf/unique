<svelte:head>
	<title>About</title>
</svelte:head>

<div class="text">
	<p>Unique is an experimental project.</p>
	<p>The main goal is to create art that is unique.</p>
	<p>It uses random generation to achieve this feeling of uniqueness.</p>
	<p>
		At the moment, it is only in a beta stage. So things might break and the art you see might
		disappear forever.
	</p>
	<br />
	<p>If you want to see more:</p>
	<div class="buttons">
		<a class="button" href="https://github.com/cyrilf/unique">Github</a>
		<a class="button" href="https://cyrilf.com">Author</a>
	</div>
</div>

<style>
	.text {
		margin: 0 auto;
		background: white;
		padding: 3rem;
	}

	.buttons {
		display: inline-flex;
		gap: 1rem;
	}

	.button {
		border: 1px solid rgba(0, 0, 0, 0.3);
		color: black;
		font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-weight: 600;
		padding: 0.8rem 1.5rem;
		text-decoration: none;
	}

	.button:hover,
	.button:focus {
		border-color: rgba(0, 0, 0, 0.15);
		color: rgba(0, 0, 0, 0.65);
	}
</style>
