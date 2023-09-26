<script lang="ts">
	import Frame from '$lib/components/frame.svelte';
	import Canvas from '$lib/components/canvas.svelte';

	let canvas;
</script>

<svelte:head>
	<title>Unique</title>
	<link rel="stylesheet" href="main.css" />
</svelte:head>

<Frame>
	<Canvas bind:this={canvas} />
</Frame>
<button class="button download" on:click={canvas.download}>Save</button>

<style>
	.download {
		margin-top: 2rem;
	}
</style>
