import { pickOneRandomly } from '$lib/helpers/random';

const drawQuarterArc = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	ctx.beginPath();
	const arc = (sAngle: number, eAngle: number) =>
		ctx.arc(x, y, Math.min(width, height) / 2, sAngle, eAngle);
	const arcs = [
		() => arc(0, 0.5 * Math.PI), // right-bottom
		() => arc(0.5 * Math.PI, Math.PI), //bottom-left
		() => arc(Math.PI, 1.5 * Math.PI), // left-top
		() => arc(1.5 * Math.PI, 0) // top-right
	];
	pickOneRandomly(arcs)();
	ctx.stroke();
};

export default drawQuarterArc;
