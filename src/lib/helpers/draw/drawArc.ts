import type { DrawFunction } from '$lib/types';

const drawArc: DrawFunction = (ctx, { x, y }, width, height, random) => {
	ctx.beginPath();
	const isBottom = random.boolean();
	ctx.arc(x, y, Math.min(width, height) / 2, isBottom ? 0 : Math.PI, isBottom ? Math.PI : 0);
	ctx.stroke();
	ctx.closePath();
};

export default drawArc;
