import { getRandomBool } from '$lib/helpers/random';

const drawHorizontalLine = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	const isHorizontal = getRandomBool();
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
