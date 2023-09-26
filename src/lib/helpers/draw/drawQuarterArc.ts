import type { DrawFunction } from '$lib/types';

const drawQuarterArc: DrawFunction = (ctx, { x, y }, width, height, random) => {
	ctx.beginPath();
	const arc = (sAngle: number, eAngle: number) =>
		ctx.arc(x, y, Math.min(width, height) / 2, sAngle, eAngle);
	const arcs = [
		() => arc(0, 0.5 * Math.PI), // right-bottom
		() => arc(0.5 * Math.PI, Math.PI), //bottom-left
		() => arc(Math.PI, 1.5 * Math.PI), // left-top
		() => arc(1.5 * Math.PI, 0) // top-right
	];
	random.choose(arcs)();
	ctx.stroke();
};

export default drawQuarterArc;
