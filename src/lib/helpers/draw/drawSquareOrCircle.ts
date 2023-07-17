import { getRandomBool } from '$lib/helpers/random';

const drawSquareOrCircle = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	const isSquare = getRandomBool();
	const isFill = getRandomBool();
	const isLarge = getRandomBool();

	ctx.beginPath();
	if (isSquare) {
		ctx[isFill ? 'fillRect' : 'strokeRect'](
			x - width / (isLarge ? 1.5 : 4) / 2,
			y - height / (isLarge ? 1.5 : 4) / 2,
			width / (isLarge ? 1.5 : 4),
			height / (isLarge ? 1.5 : 4)
		);
	} else {
		ctx.arc(
			x,
			y,
			isLarge ? Math.max(0, Math.min(width, height) / 2 - 0.5) : Math.min(width, height) / 4,
			0,
			2 * Math.PI
		);
		ctx[isFill ? 'fill' : 'stroke']();
	}
};

export default drawSquareOrCircle;
