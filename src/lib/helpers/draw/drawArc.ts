import { getRandomBool } from '$lib/helpers/random';

const drawArc = (ctx: CanvasRenderingContext2D, { x, y }: Coord, width: number, height: number) => {
	ctx.beginPath();
	const isBottom = getRandomBool();
	ctx.arc(x, y, Math.min(width, height) / 2, isBottom ? 0 : Math.PI, isBottom ? Math.PI : 0); // bottom
	ctx.stroke();
	ctx.closePath();
};

export default drawArc;
