import type { DrawFunction } from '$lib/types';

const drawDiagonalLine: DrawFunction = (ctx, { x, y }, width, height, random) => {
	const isDownRight = random.boolean();
	ctx.beginPath();
	ctx.moveTo(x - width / 2, isDownRight ? y - height / 2 : y + height / 2);
	ctx.lineTo(x + width / 2, isDownRight ? y + height / 2 : y - height / 2);
	ctx.stroke();
};

export default drawDiagonalLine;
