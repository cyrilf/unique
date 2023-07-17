export const getGridCoords = (steps: number, stepX: number, stepY: number): Coord[] =>
	!stepX || !stepY
		? []
		: Array.from({ length: steps * steps }).map((_, index) => ({
				x: stepX / 2 + Math.floor(index / steps) * stepX,
				y: stepY / 2 + (index % steps) * stepY
		  }));
