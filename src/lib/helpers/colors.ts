import type Random from '$lib/helpers/random';
import type { Palette } from '$lib/types';

const luxuryColorPalette: Palette = [
	'#663399', // Royal Purple
	'#B03060', // Maroon
	'#FFD700', // Gold
	'#800000', // Crimson
	'#8B4513', // Saddle Brown
	'#6B8E23' // Olive Drab
];

const getRandomColorFromPalette = (palette: Palette, random: Random) => random.choose(palette);
export const getRandomColor = (random: Random) =>
	getRandomColorFromPalette(luxuryColorPalette, random);
export const getHueFilter = (random: Random) =>
	'hue-rotate(' + Math.floor(random.float() * 360) + 'deg)';
