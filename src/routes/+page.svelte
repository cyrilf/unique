<script lang="ts">
	import Canvas from '../lib/components/canvas.svelte';
</script>

<svelte:head>
	<title>Unique</title>
</svelte:head>

<div class="container">
	<h1>Unique.</h1>
	<div class="wrapper">
		<Canvas />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
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
		font-family: 'Vollkorn', serif;
		margin: 2rem;
	}
</style>
