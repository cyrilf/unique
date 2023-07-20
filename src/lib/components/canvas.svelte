<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Frame from './frame.svelte';
	import { getRandomColor, getHueFilter } from '$lib/helpers/colors';
	import { getRandomBool } from '$lib/helpers/random';
	import { Drawer } from '$lib/helpers/draw';
	import { getGridCoords } from '$lib/helpers/grid';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let width: number = 400;
	let height: number = 400;

	let steps = 23;
	let stepX: number;
	let stepY: number;
	$: gridCoords = getGridCoords(steps, stepX, stepY);

	onMount(async () => {
		const dpr = window.devicePixelRatio;
		ctx = canvas.getContext('2d');

		width = Math.min(window.innerWidth - 92, 400);
		height = Math.min(window.innerHeight, width);

		await tick();
		stepX = width / steps;
		stepY = height / steps;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		await tick();

		if (ctx) {
			ctx.scale(dpr, dpr);
			draw(ctx);
		}
	});

	const draw = (ctx: CanvasRenderingContext2D) => {
		const drawer = new Drawer(ctx, width, height);
		drawer.clear();

		const isColored = getRandomBool();
		canvas.style.filter = isColored ? getHueFilter() : '';
		drawer.setRandomDrawFunction();

		gridCoords.forEach((coord) => {
			// DEBUG MODE
			// ctx.beginPath();
			// ctx.arc(coord.x, coord.y, 1, 0, Math.PI * 2);
			// ctx.strokeStyle = 'black';
			// ctx.stroke();
			const color = isColored ? getRandomColor() : 'black';
			ctx.fillStyle = color;
			ctx.strokeStyle = color;

			drawer.paint(coord, stepX, stepY);
		});
	};

	const randomize = () => {
		// steps = steps + 2;
		// stepX = width / steps;
		// stepY = width / steps;
		ctx && draw(ctx);
	};
</script>

<canvas bind:this={canvas} {width} {height} on:click={randomize} />

<style>
	canvas {
		cursor: pointer;
	}
</style>
