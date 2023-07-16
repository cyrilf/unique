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

	let steps: number = 42;
	let stepX: number;
	let stepY: number;

	const getGridCoords = () =>
		Array.from({ length: steps * steps }).map((_, index) => ({
			x: Math.floor(index / steps) * stepX,
			y: (index % steps) * stepY
		}));

	const drawDiagonalLine = (
		ctx: CanvasRenderingContext2D | null,
		{ x, y }: Coord,
		width: number,
		height: number
	) => {
		const isLeftToRight = Math.random() > 0.5;
		ctx?.beginPath();
		ctx?.moveTo(x, isLeftToRight ? y : y + height);
		ctx?.lineTo(x + width, isLeftToRight ? y + height : y);
		ctx?.stroke();
	};

	const draw = () => {
		ctx?.clearRect(0, 0, width, height);
		const gridCoords = getGridCoords();
		gridCoords.forEach((coord) => {
			drawDiagonalLine(ctx, coord, stepX, stepY);
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
			ctx.lineCap = 'square';
			ctx.lineWidth = 2;
			draw();
		}

		// let frame = requestAnimationFrame(loop);
		// function loop() {
		// 	// frame = requestAnimationFrame(loop);
		// 	draw();
		// }

		// return () => {
		// 	// cancelAnimationFrame(frame);
		// };
	});

	function randomize() {
		// steps = steps + 2;
		// stepX = width / steps;
		// stepY = width / steps;
		draw();
	}
</script>

<Frame bind:canvas bind:width bind:height on:click={randomize} />
