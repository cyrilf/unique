import type { DrawFunction } from '$lib/types';

const drawHorizontalLine: DrawFunction = (ctx, { x, y }, width, height, random) => {
	const isHorizontal = random.boolean();
	ctx.beginPath();
	if (isHorizontal) {
		ctx.moveTo(x - width / 2, y);
		ctx.lineTo(x + width / 2, y);
	} else {
		ctx.moveTo(x, y - height / 2);
		ctx.lineTo(x, y + height / 2);
	}
	ctx.stroke();
};

export default drawHorizontalLine;
