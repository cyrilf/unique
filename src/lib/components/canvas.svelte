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

	let steps = 20;
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

	const drawQuarterArc = (ctx: CanvasRenderingContext2D | null, { x, y }: Coord, width: number) => {
		ctx?.beginPath();
		const random = Math.random();
		const arc = (sAngle: number, eAngle: number) => ctx?.arc(x, y, width / 2, sAngle, eAngle);
		if (random < 0.25) {
			arc(0, 0.5 * Math.PI); // right-bottom
		} else if (random >= 0.25 && random < 0.5) {
			arc(0.5 * Math.PI, Math.PI); //bottom-left
		} else if (random >= 0.5 && random < 0.75) {
			arc(Math.PI, 1.5 * Math.PI); // left-top
		} else {
			arc(1.5 * Math.PI, 0); // top-right
		}
		ctx?.stroke();
	};

	const drawArc = (ctx: CanvasRenderingContext2D | null, { x, y }: Coord, width: number) => {
		ctx?.beginPath();
		const isBottom = Math.random() > 0.5;
		ctx?.arc(x, y, width / 2, isBottom ? 0 : Math.PI, isBottom ? Math.PI : 0); // bottom
		ctx?.stroke();
		ctx?.closePath();
	};

	const draw = () => {
		ctx?.clearRect(0, 0, width, height);
		const gridCoords = getGridCoords();
		const random = Math.random();

		let func = drawHorizontalLine;
		if (random >= 0.25 && random <= 0.5) {
			func = drawDiagonalLine;
		} else if (random >= 0.5 && random < 0.75) {
			func = drawArc;
		} else if (random >= 0.75) {
			func = drawQuarterArc;
		}
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
