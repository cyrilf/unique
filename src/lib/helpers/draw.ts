import { getRandomBool, pickOneRandomly } from '$lib/helpers/random';

const withContext =
	(drawFn: DrawFunctionContext, ctx: CanvasRenderingContext2D) =>
	(...args: [Coord, number, number]) =>
		drawFn(ctx, ...args);

export const drawHorizontalLine = (
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

export const drawSquareOrCircle = (
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
	// ctx.stroke();
};

export const drawDiagonalLine = (
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

export const drawQuarterArc = (
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

export const drawArc = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	ctx.beginPath();
	const isBottom = getRandomBool();
	ctx.arc(x, y, Math.min(width, height) / 2, isBottom ? 0 : Math.PI, isBottom ? Math.PI : 0); // bottom
	ctx.stroke();
	ctx.closePath();
};

export const drawSpiral = (
	ctx: CanvasRenderingContext2D,
	{ x, y }: Coord,
	width: number,
	height: number
) => {
	ctx.beginPath();
	// ctx.moveTo(x, y);
	const isClockwise = getRandomBool();
	const isFlip = getRandomBool();

	const swirls = 2;
	const radius = Math.min(width, height) / 2;
	const maxAngle = swirls * Math.PI * 2;
	const totalPoints = 360; // 360 * swirls
	const startAngle = isClockwise ? 0 : maxAngle;
	const angleIncrement = (isClockwise ? maxAngle : -maxAngle) / totalPoints;

	for (let i = 0; i <= totalPoints; i++) {
		const angle = startAngle + i * angleIncrement;
		const spiralRadius = radius - i * (radius / totalPoints);
		const a = x - width / 2 + radius + spiralRadius * Math.cos(angle + (isFlip ? Math.PI : 0));
		const b = y - height / 2 + radius + spiralRadius * Math.sin(angle + (isFlip ? Math.PI : 0));
		ctx.lineTo(a, b);
	}

	ctx.stroke();
};

const drawFunctions = [
	drawHorizontalLine,
	drawDiagonalLine,
	drawArc,
	drawQuarterArc,
	drawSpiral,
	drawSquareOrCircle
];

export class Drawer {
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;
	functions: { [key: string]: DrawFunction };
	activeFunctions: DrawFunction[];

	constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const functions = drawFunctions.reduce((result, fn) => {
			result[fn.name] = withContext(fn, ctx);
			return result;
		}, {} as { [key: string]: DrawFunction });

		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.functions = functions;
		this.activeFunctions = [];
		this.setRandomDrawFunction();
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	setRandomDrawFunction() {
		this.activeFunctions = [pickOneRandomly(Object.values(this.functions))];
	}

	paint(coord: Coord, stepX: number, stepY: number) {
		this.activeFunctions[0](coord, stepX, stepY);
	}
}
