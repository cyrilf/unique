import { getRandomBool } from '$lib/helpers/random';

const drawBlobbyLine = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	ctx.beginPath();

	const isRight = getRandomBool();
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
