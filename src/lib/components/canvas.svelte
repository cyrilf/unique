<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Frame from './frame.svelte';

	type Coord = {
		x: number;
		y: number;
	};

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let width: number;
	let height: number;

	let steps: number = 20;
	let stepX: number;
	let stepY: number;

	const getGridCoords = () =>
		Array.from({ length: steps * steps }).map((_, index) => ({
			x: Math.floor(index / steps) * stepX,
			y: (index % steps) * stepY
		}));

	const drawHorizontalLine = (
		ctx: CanvasRenderingContext2D | null,
		{ x, y }: Coord,
		width: number,
		height: number
	) => {
		const isHorizontal = Math.random() > 0.5;
		ctx?.beginPath();
		if (isHorizontal) {
			ctx?.moveTo(x, y + height / 2);
			ctx?.lineTo(x + width, y + height / 2);
		} else {
			ctx?.moveTo(x + width / 2, y);
			ctx?.lineTo(x + width / 2, y + height);
		}
		ctx?.stroke();
	};

	const drawDiagonalLine = (
		ctx: CanvasRenderingContext2D | null,
		{ x, y }: Coord,
		width: number,
		height: number
	) => {
		const isDownRight = Math.random() > 0.5;
		ctx?.beginPath();
		ctx?.moveTo(x, isDownRight ? y : y + height);
		ctx?.lineTo(x + width, isDownRight ? y + height : y);
		ctx?.stroke();
	};

	const draw = () => {
		ctx?.clearRect(0, 0, width, height);
		const gridCoords = getGridCoords();
		const isHorizontal = Math.random() > 0.5;
		const func = isHorizontal ? drawHorizontalLine : drawDiagonalLine;
		gridCoords.forEach((coord) => {
			// DEBUG MODE
			// ctx?.beginPath();
			// ctx?.arc(coord.x, coord.y, 1, 0, Math.PI * 2);
			// ctx?.stroke();
			func(ctx, coord, stepX, stepY);
		});
	};

	onMount(async () => {
		const dpr = window.devicePixelRatio;
		ctx = canvas.getContext('2d');

		await tick();

		stepX = width / steps;
		stepY = width / steps;

		canvas.width = width * dpr;
		canvas.height = height * dpr;

		if (ctx) {
			ctx.scale(dpr, dpr);
			ctx.lineWidth = 2;
			ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
			draw();
		}
	});

	function randomize() {
		// steps = steps + 2;
		// stepX = width / steps;
		// stepY = width / steps;
		draw();
	}
</script>

<Frame bind:canvas bind:width bind:height on:click={randomize} />
