<script lang="ts" client:only>
	export let canvas: HTMLCanvasElement;
	export let width: number;
	export let height: number;

	let rawWidth: number;
	let rawHeight: number;

	$: width = rawWidth ? rawWidth - 20 : 0;
	$: height = rawHeight ? rawHeight - 20 : 0;
</script>

<div class="frame" on:click role="button" tabindex="-1" on:keypress>
	<div class="frame--inner" bind:clientWidth={rawWidth} bind:clientHeight={rawHeight}>
		<canvas bind:this={canvas} class="art" width={400} height={400} />
	</div>
</div>

<style>
	.frame {
		border: solid rgba(0, 0, 0, 1) 12px;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
		margin: 0 auto;
		cursor: pointer;
	}

	.frame--inner {
		border: 24px solid rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.3) inset;
		width: 400px;
		height: 400px;
	}

	.art {
		margin: 10px;
	}
</style>
