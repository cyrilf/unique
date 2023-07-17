import { getRandomInt } from '$lib/helpers/random';

const drawCircles = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	let radius = Math.max(0, Math.min(width, height) / 2 - 5);
	const gap = radius / (getRandomInt(10) + 1);
	while (radius > 0) {
		// gap = radius / getRandomInt(10);
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI);
		radius -= gap;
		ctx.stroke();
	}
};

export default drawCircles;
