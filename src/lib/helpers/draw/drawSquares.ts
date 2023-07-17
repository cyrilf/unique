import { getRandomInt } from '$lib/helpers/random';

const drawSquares = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	let size = Math.min(height, width);
	const gap = size / (getRandomInt(20) + 1);
	while (size > 0) {
		ctx.beginPath();
		ctx.strokeRect(x - size / 2, y - size / 2, size, size);
		size -= gap;
		ctx.stroke();
	}
};

export default drawSquares;
