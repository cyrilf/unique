import type { DrawFunction } from '$lib/types';

const drawBlobbyLine: DrawFunction = (ctx, { x, y }, width, height, random) => {
	ctx.beginPath();

	const isRight = random.boolean();
	let i = 10;
	while (i > 0) {
		ctx.arc(
			x,
			y,
			Math.min(width, height) / (1 + i),
			(isRight ? 0.5 : 1.5) * Math.PI,
			(isRight ? 1.5 : 0.5) * Math.PI
		);
		i--;
	}
	ctx.stroke();
};

export default drawBlobbyLine;
