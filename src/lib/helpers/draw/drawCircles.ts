import type { DrawFunction } from '$lib/types';

const drawCircles: DrawFunction = (ctx, { x, y }, width, height, random) => {
	let radius = Math.max(0, Math.min(width, height) / 2 - 5);
	const gap = radius / random.int(1, 10);
	while (radius > 0) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI);
		radius -= gap;
		ctx.stroke();
	}
};

export default drawCircles;
