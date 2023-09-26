<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';

	import { getRandomColor, getHueFilter } from '$lib/helpers/colors';
	import Random from '$lib/helpers/random';
	import { Drawer } from '$lib/helpers/draw';
	import { getGridCoords } from '$lib/helpers/grid';
	import { goto } from '$app/navigation';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let width: number = 400;
	let height: number = 400;

	let steps = 23;
	let stepX: number;
	let stepY: number;
	$: gridCoords = getGridCoords(steps, stepX, stepY);
	let seed: string | undefined;
	$: {
		seed = $page.url.searchParams.get('id') ?? undefined;
		ctx && draw(ctx);
	}

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
			seed ? draw(ctx) : randomize();
		}
	});

	const draw = (ctx: CanvasRenderingContext2D) => {
		const random = new Random(seed);

		const drawer = new Drawer(ctx, width, height, random);
		drawer.clear();

		const isColored = random.boolean();
		canvas.style.filter = isColored ? getHueFilter(random) : '';

		gridCoords.forEach((coord) => {
			// DEBUG MODE
			// ctx.beginPath();
			// ctx.arc(coord.x, coord.y, 1, 0, Math.PI * 2);
			// ctx.strokeStyle = 'black';
			// ctx.stroke();
			const color = isColored ? getRandomColor(random) : 'black';
			ctx.fillStyle = color;
			ctx.strokeStyle = color;

			drawer.paint(coord, stepX, stepY);
		});
	};

	const randomize = async () => {
		const url = new URL($page.url);
		url.searchParams.set('id', Math.random() * 100000000000000000 + '');
		goto(url);
	};
</script>

<canvas bind:this={canvas} {width} {height} on:click={randomize} />

<style>
	canvas {
		cursor: pointer;
	}
</style>
