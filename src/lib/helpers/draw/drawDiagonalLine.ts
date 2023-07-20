import { getRandomBool } from '$lib/helpers/random';

const drawDiagonalLine = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	const isDownRight = getRandomBool();
	ctx.beginPath();
	ctx.moveTo(x - width / 2, isDownRight ? y - height / 2 : y + height / 2);
	ctx.lineTo(x + width / 2, isDownRight ? y + height / 2 : y - height / 2);
	ctx.stroke();
};

export default drawDiagonalLine;
