type Coord = {
	x: number;
	y: number;
};

type DrawFunctionContext = (
	ctx: CanvasRenderingContext2D,
	coord: Coord,
	stepX: number,
	stepY: number
) => void;
type DrawFunction = (coord: Coord, stepX: number, stepY: number) => void;

type Palette = string[];
