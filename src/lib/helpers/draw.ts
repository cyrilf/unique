import { pickOneRandomly } from '$lib/helpers/random';
import * as drawFunctions from './draw/index';

type DrawFunctionKeys = keyof typeof drawFunctions;

export class Drawer {
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;
	activeFunctions: DrawFunction[];

	constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.activeFunctions = [];
		this.setRandomDrawFunction();
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	setRandomDrawFunction() {
		const randomFunction = pickOneRandomly(Object.keys(drawFunctions)) as DrawFunctionKeys;
		this.activeFunctions = [
			drawFunctions[randomFunction]
			// simpler version but it won't contain the name
			// I think the name will be important at some stage
			// pickOneRandomly(Object.values(drawFunctions))
		];
	}

	paint(coord: Coord, stepX: number, stepY: number) {
		this.activeFunctions[0](this.ctx, coord, stepX, stepY);
	}
}
