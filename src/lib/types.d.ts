type Coord = {
	x: number;
	y: number;
};

type DrawFunction = (
	ctx: CanvasRenderingContext2D,
	coord: Coord,
	stepX: number,
	stepY: number
) => void;

type Palette = string[];
