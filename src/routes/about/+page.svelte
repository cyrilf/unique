<svelte:head>
	<title>About</title>
	<link rel="stylesheet" href="main.css" />
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
</style>
