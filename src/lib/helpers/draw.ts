import type { Coord, DrawFunction } from '$lib/types';
import * as drawFunctions from './draw/index';
import type Random from './random';

type DrawFunctionKeys = keyof typeof drawFunctions;

export class Drawer {
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;
	activeFunctions: DrawFunction[];
	random: Random;

	constructor(ctx: CanvasRenderingContext2D, width: number, height: number, random: Random) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.activeFunctions = [];
		this.random = random;
		this.setRandomDrawFunction();
	}

	clear() {
		this.ctx.fillStyle = 'white';
		this.ctx.fillRect(0, 0, this.width, this.height);
	}

	setRandomDrawFunction() {
		const randomFunction = this.random.choose(Object.keys(drawFunctions)) as DrawFunctionKeys;
		this.activeFunctions = [
			drawFunctions[randomFunction]
			// simpler version but it won't contain the name
			// I think the name will be important at some stage
			// this.random.choose(Object.values(drawFunctions))
		];
	}

	paint(coord: Coord, stepX: number, stepY: number) {
		this.activeFunctions[0](this.ctx, coord, stepX, stepY, this.random);
	}
}
