import type { DrawFunction } from '$lib/types';

const drawSquares: DrawFunction = (ctx, { x, y }, width, height, random) => {
	let size = Math.min(height, width);
	const gap = size / random.int(1, 20);
	while (size > 0) {
		ctx.beginPath();
		ctx.strokeRect(x - size / 2, y - size / 2, size, size);
		size -= gap;
		ctx.stroke();
	}
};

export default drawSquares;
