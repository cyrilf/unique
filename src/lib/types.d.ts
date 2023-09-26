import type Random from '$lib/helpers/random';

type Coord = {
	x: number;
	y: number;
};

type DrawFunction = (
	ctx: CanvasRenderingContext2D,
	coord: Coord,
	stepX: number,
	stepY: number,
	random: Random
) => void;

type Palette = string[];
